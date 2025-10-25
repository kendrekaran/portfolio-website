import { NextResponse } from "next/server";

// Cache for the week's data
let weekDataCache: {
  data: Record<string, string>;
  lastFetch: number;
} | null = null;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

export async function GET() {
  try {
    // Check if API key exists
    if (!process.env.WAKATIME_API_KEY) {
      console.error("WAKATIME_API_KEY is not set");
      return NextResponse.json(
        { error: "WakaTime API key not configured" },
        { status: 500 }
      );
    }

    // Check if we have valid cached data
    if (weekDataCache && Date.now() - weekDataCache.lastFetch < CACHE_DURATION) {
      console.log("Returning cached week data");
      return NextResponse.json({
        data: weekDataCache.data,
        cached: true,
        lastFetch: weekDataCache.lastFetch
      });
    }

    console.log("Fetching fresh week data");
    
    // Generate last 7 days
    const today = new Date();
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split("T")[0]);
    }

    // Fetch data for all 7 days in parallel
    const promises = dates.map(async (date) => {
      try {
        const res = await fetch(
          `https://wakatime.com/api/v1/users/current/durations?date=${date}`,
          {
            headers: {
              Authorization: `Basic ${Buffer.from(`${process.env.WAKATIME_API_KEY}:`).toString('base64')}`,
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          console.error(`Failed to fetch data for ${date}:`, res.status);
          return { date, hours: "0.00" };
        }

        const data = await res.json();
        const durations = data.data || [];
        const totalSeconds = durations.reduce(
          (sum: number, item: any) => sum + item.duration,
          0
        );
        const totalHours = (totalSeconds / 3600).toFixed(2);
        
        return { date, hours: totalHours };
      } catch (error) {
        console.error(`Error fetching data for ${date}:`, error);
        return { date, hours: "0.00" };
      }
    });

    const results = await Promise.all(promises);
    
    // Convert to object format
    const weekData: Record<string, string> = {};
    results.forEach(({ date, hours }) => {
      weekData[date] = hours;
    });

    // Update cache
    weekDataCache = {
      data: weekData,
      lastFetch: Date.now()
    };

    return NextResponse.json({
      data: weekData,
      cached: false,
      lastFetch: Date.now()
    });

  } catch (error: any) {
    console.error("Coding time week API error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

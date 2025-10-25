import { NextResponse } from "next/server";

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

    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];
    console.log("Fetching data for date:", today);

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/durations?date=${today}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${process.env.WAKATIME_API_KEY}:`).toString('base64')}`,
        },
        cache: "no-store",
      }
    );

    console.log("WakaTime API response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("WakaTime API error:", errorText);
      
      // If unauthorized, return 0 hours instead of error
      if (res.status === 401) {
        return NextResponse.json({
          date: today,
          hours: "0.00",
          timezone: "UTC",
          error: "WakaTime API key invalid or expired"
        });
      }
      
      throw new Error(`WakaTime API error: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    console.log("WakaTime API response:", data);
    
    const durations = data.data || [];

    const totalSeconds = durations.reduce(
      (sum: number, item: any) => sum + item.duration,
      0
    );

    const totalHours = (totalSeconds / 3600).toFixed(2);

    return NextResponse.json({
      date: today,
      hours: totalHours,
      timezone: data.timezone,
    });
  } catch (error: any) {
    console.error("Coding time API error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

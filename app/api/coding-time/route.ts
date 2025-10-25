import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Check if API key exists
    if (!process.env.WAKATIME_API_KEY) {
      console.error("WAKATIME_API_KEY is not set");
      return NextResponse.json(
        { error: "WakaTime API key not configured" },
        { status: 500 }
      );
    }

    // Get date from query parameters or use current date
    const { searchParams } = new URL(request.url);
    const requestedDate = searchParams.get('date');
    const targetDate = requestedDate || new Date().toISOString().split("T")[0];
    
    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(targetDate)) {
      return NextResponse.json(
        { error: "Invalid date format. Use YYYY-MM-DD" },
        { status: 400 }
      );
    }
    
    console.log("Fetching data for date:", targetDate);

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/durations?date=${targetDate}`,
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
          date: targetDate,
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
      date: targetDate,
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

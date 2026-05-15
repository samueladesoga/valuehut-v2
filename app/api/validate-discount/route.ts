import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json({ valid: false, error: "Invalid code" }, { status: 400 });
    }

    const raw = process.env.DISCOUNT_CODES ?? "";
    const entries = raw.split(",").filter(Boolean);

    for (const entry of entries) {
      const [storedCode, percentStr] = entry.trim().split(":");
      if (storedCode.toUpperCase() === code.trim().toUpperCase()) {
        const percent = parseInt(percentStr, 10);
        if (!isNaN(percent) && percent > 0 && percent <= 100) {
          return NextResponse.json({ valid: true, percent, code: storedCode.toUpperCase() });
        }
      }
    }

    return NextResponse.json({ valid: false, error: "Invalid or expired discount code" });
  } catch {
    return NextResponse.json({ valid: false, error: "Something went wrong" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { findDiscount } from "@/lib/discounts";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json({ valid: false, error: "Invalid code" }, { status: 400 });
    }

    const discount = findDiscount(code);
    if (discount) {
      return NextResponse.json({ valid: true, percent: discount.percent, code: discount.code });
    }

    return NextResponse.json({ valid: false, error: "Invalid or expired discount code" });
  } catch {
    return NextResponse.json({ valid: false, error: "Something went wrong" }, { status: 500 });
  }
}

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-contentful-webhook-secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const contentType = body?.sys?.contentType?.sys?.id as string | undefined;

    if (contentType === "course" || contentType === "courseDetails") {
      revalidateTag("courses");
    } else {
      // blog or any other content type
      revalidateTag("blog");
    }

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 }
    );
  }
}

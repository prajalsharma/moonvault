import connectToMongoose from "@/db/connection";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await connectToMongoose();

    const jobs = await Job.find();

    const response = NextResponse.json({ status: 200, jobs });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

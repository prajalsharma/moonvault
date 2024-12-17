import connectToMongoose from "@/db/connection";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Connect to the database
    await connectToMongoose();

    // Fetch jobs sorted by 'id' in ascending order using the static method
    const jobs = await Job.fetchSortedJobs();

    // Return the sorted jobs as a JSON response
    const response = NextResponse.json({ status: 200, jobs });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    console.error("Error fetching sorted jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


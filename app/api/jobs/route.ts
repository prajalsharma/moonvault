import { getJobs } from '../../../lib/notion';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const posts = await getJobs();
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

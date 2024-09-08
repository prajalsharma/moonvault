"use client";
import { useState } from "react";
import TextFilter from "./_components/TextFilter";
import Card from "./_components/Card";
import LocationFilter from "./_components/LocationFilter";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import JobTypeSelector from "./_components/JobTypeSelector";
import { jobs } from "@/data/jobs";
import { getBlogPosts } from "@/lib/notion";

interface Post {
  role: string;
  location: string;
  jobDescription: string;
  company: string;
  type: string;
  logo: string;
}

const JobsPage = async() => {
  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("on-site-remote");

  const handleFilterChange = (filter: string) => {
    setTextFilter(filter);
  };

  const posts: Post[] = await getBlogPosts();

  // const handleLocationFilterChange = (location: string) => {
  //   setLocationFilter(location);
  // };

  const filteredJobs = jobs.filter((job) => {
    const matchesTextFilter =
      job.role.toLowerCase().includes(textFilter.toLowerCase()) ||
      job.company.toLowerCase().includes(textFilter.toLowerCase());

    // const matchesLocationFilter = locationFilter === "on-site-remote" || (locationFilter === "remote" && job.location.toLowerCase() === "remote") || (locationFilter === "on-site" && job.location.toLowerCase() !== "remote");

    return matchesTextFilter;
  });

  return (
    <main className="pt-20 pb-10 mx-auto">
      <div className="bg-[#f7fafc] px-7 pt-32 pb-2">
        <div className="lg:w-[57rem] mx-auto flex flex-col gap-14">
          <div className="bg-white border-[1.5px] rounded-sm flex flex-col gap-4">
            <div className="flex flex-col lg:gap-4 lg:flex-row  divide-y-[1.5px] md:divide-x-[1.5px] md:divide-y-0 border-b">
              <TextFilter onTextFilterChange={handleFilterChange} />
              <LocationFilter />
            </div>
            <div className="px-4 pb-3">
              <JobTypeSelector />
            </div>
          </div>
          <div>
            <SecondaryNavbar />
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-5 lg:w-[57rem] mx-auto px-7 lg:px-0">
        <p className="text-sm text-slate-800">
          Showing <span className="font-bold">{filteredJobs.length}</span> jobs
        </p>
        <div className="flex flex-col gap-3">
          {posts.map((job) => (
            <Card key={job.role} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default JobsPage;

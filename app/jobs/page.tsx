"use client";
import { jobs } from "@/data/jobs";
import TextFilter from "./_components/TextFilter";
import Card from "./_components/Card";
import { useState } from "react";
import SelectFilter from "./_components/SelectFilter";

const JobsPage = () => {
  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("on-site-remote");

  const handleFilterChange = (filter: string) => {
    setTextFilter(filter);
  };

  const handleLocationFilterChange = (location: string) => {
    setLocationFilter(location);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesTextFilter = job.role.toLowerCase().includes(textFilter.toLowerCase()) || job.project.toLowerCase().includes(textFilter.toLowerCase());

    const matchesLocationFilter = locationFilter === "on-site-remote" || (locationFilter === "remote" && job.location.toLowerCase() === "remote") || (locationFilter === "on-site" && job.location.toLowerCase() !== "remote");

    return matchesTextFilter && matchesLocationFilter;
  });

  return (
    <main className="pt-32 pb-10 mx-auto lg:w-[70.75rem] px-7">
      <div className="bg-white p-4 rounded-sm shadow-sm flex flex-col gap-4 lg:flex-row">
        <TextFilter onTextFilterChange={handleFilterChange} />
        <SelectFilter onLocationFilterChange={handleLocationFilterChange} />
      </div>
      <div className="pt-10 flex flex-col gap-5">
        <p className="text-sm text-slate-800">
          Showing <span className="font-bold">{filteredJobs.length}</span> jobs
        </p>
        <div className="flex flex-col gap-3">
          {filteredJobs.map((job) => (
            <Card key={job.role} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default JobsPage;

"use client";
import { useEffect, useState } from "react";
import Card from "./_components/Card";
import TextFilter from "./_components/TextFilter";
import LocationFilter from "./_components/LocationFilter";
import MultiSelectFilter from "./_components/MultiSelectFilter";
import CategoryButtons from "./_components/CategoryButtons";

interface Job {
  id: string;
  role: string;
  type: string;
  location: string;
  hybrid: string;
  jobFunction: string;
  jobDescription: string;
  company: string;
  category: string;
  logo: string;
}

const JobsPage = () => {
  const [selectedJobFunction, setSelectedJobFunction] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [filteredjobs, setFilteredJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const handleFilterChange = () => {};

  const handleLocationChange = (data: string) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (response.ok) {
          const jobs = await response.json();
          setAllJobs(jobs);
          setFilteredJobs(jobs);
          handleFilters(jobs, selectedJobFunction, selectedJobType, activeCategories);
        } else {
          console.error("Failed to fetch jobs:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [selectedJobFunction, selectedJobType, activeCategories]);

  const handleFilters = (
    jobs: Job[],
    selectedJobFunctions: string[],
    selectedJobTypes: string[],
    categories: string[]
  ) => {
    if (
      selectedJobFunctions.length === 0 &&
      selectedJobTypes.length === 0 &&
      categories.length === 0
    ) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter((job) => {
      const matchesCategory = categories.length > 0 ? categories.includes(job.category) : true;

      const matchesJobFunction =
        selectedJobFunctions.length > 0 ? selectedJobFunctions.includes(job.jobFunction) : true;

      const matchesJobType =
        selectedJobTypes.length > 0
          ? selectedJobTypes.some((type) => {
              if (type === "Remote") {
                return job.type === "Remote" && job.hybrid === "False";
              } else {
                return job.hybrid === "True";
              }
            })
          : true;

      return matchesCategory && matchesJobFunction && matchesJobType;
    });

    setFilteredJobs(filtered);
  };

  const handleCategory = (cate: string) => {
    setActiveCategories((prevCategories) =>
      prevCategories.includes(cate)
        ? prevCategories.filter((cat) => cat !== cate)
        : [...prevCategories, cate]
    );
  };

  useEffect(() => {
    handleFilters(allJobs, selectedJobFunction, selectedJobType, activeCategories);
  }, [selectedJobFunction, selectedJobType, activeCategories]);

  return (
    <main className="pb-10 mx-auto">
      <div className="bg-[#f7fafc] px-7 md:px-12 py-16">
        <div className="mx-auto flex flex-col gap-14">
          <div className="bg-white border-[1.5px] rounded-sm flex flex-col">
            <div className="flex flex-col lg:gap-4 lg:flex-row divide-y-[1.5px] lg:divide-x-[1.5px] lg:divide-y-0 border-b">
              <TextFilter onTextFilterChange={handleFilterChange} />
              <LocationFilter onLocationFilterChange={handleLocationChange} />
            </div>
            <div className="flex flex-col px-4 py-3 w-full gap-4 ">
              <MultiSelectFilter
                selectedJobFunction={selectedJobFunction}
                setSelectedJobFunction={setSelectedJobFunction}
                selectedJobType={selectedJobType}
                setSelectedJobType={setSelectedJobType}>
                <CategoryButtons
                  activeCategories={activeCategories}
                  handleCategory={handleCategory}
                />
              </MultiSelectFilter>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-5 mx-auto px-7 md:px-12">
        <p className="text-sm text-slate-800">
          Showing <span className="font-bold">{filteredjobs.length}</span> jobs
        </p>
        <div className="flex flex-col gap-3">
          {filteredjobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default JobsPage;

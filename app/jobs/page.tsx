"use client";
import { useEffect, useState } from "react";
import TextFilter from "./_components/TextFilter";
import Card from "./_components/Card";
import LocationFilter from "./_components/LocationFilter";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { MultiSelect } from "@/components/MultiSelector";
import { Button } from "@/components/ui/button";
import { getJobs } from "@/lib/notion";



const jobType = [
  { value: "hybrid", label: "On-Site" },
  { value: "Remote", label: "Remote" },
];

const jobFunction = [
  { value: "software_engineering", label: "Software Engineering" },
  { value: "marketing_communication", label: "Marketing Communication" },
  { value: "sales_business_dev", label: "Sales Business Dev" },
  { value: "data_science", label: "Data Science" },
  { value: "research_development", label: "Research Development" },
  { value: "product_management", label: "Product Management" },
  { value: "design_ux", label: "Design UX" },
  { value: "content", label: "Content" },
  { value: "other_engineering", label: "Other Engineering" },
  { value: "devops_infrastructure", label: "DevOps Infrastructure" },
  { value: "accounting_finance", label: "Accounting Finance" }
];

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

  const handleFilterChange = () => {
    console.log()
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (response.ok) {
          console.log("response");
          const allJobs = await response.json();
          setAllJobs(allJobs);
          console.log(allJobs);
        } else {
          console.error('Failed to fetch jobs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();

    handleMultiSelect(selectedJobFunction, selectedJobType);
  }, [selectedJobFunction, selectedJobType]);

  const handleMultiSelect = (selectedJobFunctions: string[], selectedJobTypes: string[]) => {
    const filtered = allJobs.filter((job) => {
      const matchesJobFunction = selectedJobFunctions.length > 0
        ? selectedJobFunctions.includes(job.jobFunction)
        : true;

      const matchesJobType = selectedJobTypes.length > 0
        ? selectedJobTypes.some((type) => {
          if (type === "Remote") {
            return job.type === "Remote" && job.hybrid === "False";
          } else if (type === "null") {
            return job.type === "null" && job.hybrid === "True";
          }
          return true;
        })
        : true;

      return matchesJobFunction && matchesJobType;
    });

    setFilteredJobs(filtered);
  };



  const handleCategory = (cate: string, jobFunction?: string, jobType?: string) => {

    if (!cate && !jobFunction && !jobType) {
      setFilteredJobs(allJobs);
      return;
    }

    const filtered = allJobs.filter((job) => {
      const matchesCategory = cate ? job.category === cate : true;
      const matchesJobFunction = jobFunction ? job.jobFunction === jobFunction : true;
      const matchesJobType = jobType ? job.type === jobType : true;
      return matchesCategory && matchesJobFunction && matchesJobType;
    });

    console.log(filtered);
    setFilteredJobs(filtered);
  };


  return (
    <main className="pt-20 pb-10 mx-auto">
      <div className="bg-[#f7fafc] px-7 pt-32 pb-2">
        <div className="lg:w-[57rem] mx-auto flex flex-col gap-14">
          <div className="bg-white border-[1.5px] rounded-sm flex flex-col gap-4">
            <div className="flex flex-col lg:gap-4 lg:flex-row  divide-y-[1.5px] md:divide-x-[1.5px] md:divide-y-0 border-b">
              <TextFilter onTextFilterChange={handleFilterChange} />
              <LocationFilter />
            </div>
            <div className="flex px-4 pb-3">
              <div>
                <MultiSelect
                  options={jobFunction}
                  onValueChange={(value) => setSelectedJobFunction(value)}
                  defaultValue={selectedJobFunction}
                  className="w-[150px]"
                  placeholder="Job Function"
                />

              </div>
              <div className="ml-[30px]">
                <MultiSelect
                  options={jobType}
                  onValueChange={(value) => setSelectedJobType(value)}
                  defaultValue={selectedJobType}
                  className="w-[6.8rem]"
                  placeholder="Job Type"
                />

              </div>
              <div className="ml-[207px]">
                <div className="space-x-[13px]">
                  <Button className="rounded-full" onClick={() => handleCategory("AVS")}>
                    AVS
                  </Button>
                  <Button className="rounded-full" onClick={() => handleCategory("Operator")}>
                    Operator
                  </Button>
                  <Button className="rounded-full" onClick={() => handleCategory("EigenDA")}>
                    EigenDA
                  </Button>
                </div>

              </div>
            </div>
          </div>
          <div>
            <SecondaryNavbar />
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-5 lg:w-[57rem] mx-auto px-7 lg:px-0">
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

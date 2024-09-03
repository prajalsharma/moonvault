"use client";
import { useState } from "react";
import { MultiSelect } from "@/components/MultiSelector";

const jobType = [
  { value: "fulltime", label: "Full Time" },
  { value: "contract", label: "Contract" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Remote" },
];
const JobTypeSelector = () => {
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  return (
    <div>
      <MultiSelect
        options={jobType}
        onValueChange={setSelectedJobType}
        defaultValue={selectedJobType}
        className="w-[6.8rem]"
        placeholder="Job Type"
      />
    </div>
  );
};
export default JobTypeSelector;

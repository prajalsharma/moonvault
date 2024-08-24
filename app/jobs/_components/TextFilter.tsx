"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type TextFilterProps = {
  onTextFilterChange: (filter: string) => void;
};

const TextFilter = ({ onTextFilterChange }: TextFilterProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onTextFilterChange(e.target.value);
  };

  return (
    <div className="border rounded border-slate-500 py-2 pr-3 pl-10 relative lg:flex-1">
      <Search className="text-slate-800 size-4 absolute left-4 top-5" />
      <Input type="text" value={value} onChange={handleInputChange} placeholder="Job title, company or keyword" className="border-none focus-visible:ring-0 rounded-none placeholder:text-[.8438rem] sm:placeholder:text-base" />
    </div>
  );
};
export default TextFilter;

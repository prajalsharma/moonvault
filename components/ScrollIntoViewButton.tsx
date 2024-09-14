"use client";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";

const ScrollIntoViewButton = () => {
  const scrollIntoView = () => {
    const mainElement = document.getElementById("job-dashboard");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollIntoView}
      className="mb-24 flex gap-3 bg-white text-[#1a0c6d] w-40 hover:bg-[#1a0c6d] hover:text-[#eaf2ff] drop-shadow-sm">
      Go to Jobs
      <ArrowDownIcon />
    </Button>
  );
};
export default ScrollIntoViewButton;

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonsProps {
  activeCategories: string[];
  handleCategory: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ activeCategories, handleCategory }) => {
  return (
    <div className="flex gap-[.8125rem] items-center">
      <Button
        className={cn(
          "rounded-full border-2 border-[#4cdf3e] text-[#1a0c6d] bg-transparent font-bold hover:bg-[#4cdf3e]/20",
          activeCategories.includes("AVS") && "bg-[#4cdf3e] hover:bg-[#4cdf3e]"
        )}
        onClick={() => handleCategory("AVS")}>
        AVS
      </Button>
      <Button
        className={cn(
          "rounded-full border-2 border-[#ffb800] text-[#1a0c6d] bg-transparent font-bold hover:bg-[#ffb800]/20",
          activeCategories.includes("Operator") && "bg-[#ffb800] hover:bg-[#ffb800]"
        )}
        onClick={() => handleCategory("Operator")}>
        Operator
      </Button>
      <Button
        className={cn(
          "rounded-full border-2 border-[#cadfff] text-[#1a0c6d] bg-transparent font-bold hover:bg-[#cadfff]/20",
          activeCategories.includes("EigenDA") && "bg-[#cadfff] hover:bg-[#cadfff]"
        )}
        onClick={() => handleCategory("EigenDA")}>
        EigenDA
      </Button>
    </div>
  );
};

export default CategoryButtons;

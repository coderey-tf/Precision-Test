import React from "react";
import { Checkbox } from "./ui/checkbox";

type RowPageProps = {
  handlePageToggle: (page: string) => void;
  selectedPages: Set<string>;
  page: string;
};

export default function RowPage({
  handlePageToggle,
  selectedPages,
  page,
}: RowPageProps) {
  return (
    <div
      className="group flex h-[42px] w-[370px] items-center justify-between pr-[15px] pl-[22px] py-2 cursor-pointer"
      onClick={() => handlePageToggle(page)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handlePageToggle(page);
      }}
    >
      <span className="font-normal text-[hsl(var(--text-primary))]">
        {page}
      </span>

      <Checkbox
        checked={selectedPages.has(page)}
        onCheckedChange={() => handlePageToggle(page)}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

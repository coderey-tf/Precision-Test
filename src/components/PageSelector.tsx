import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "./ui/separator";
import Button from "./ui/button";

export const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isAllPagesChecked, setIsAllPagesChecked] = useState(false);

  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

  useEffect(() => {
    if (selectedPages.size === pages.length && pages.length > 0) {
      setIsAllPagesChecked(true);
    } else {
      setIsAllPagesChecked(false);
    }
  }, [selectedPages, pages.length]);

  const handlePageToggle = (page: string) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(page)) {
      newSelected.delete(page);
    } else {
      newSelected.add(page);
    }
    setSelectedPages(newSelected);
  };

  const handleAllPagesToggle = () => {
    if (isAllPagesChecked) {
      setSelectedPages(new Set());
    } else {
      setSelectedPages(new Set(pages));
    }
  };

  return (
    <div className="min-h-screen text-[14px] leading-[130%] tracking-[0px] flex items-center  justify-center border border-[#EEEEEE]">
      <div className="w-fit h-fit m-auto bg-white py-2.5 rounded-lg shadow-[0_8px_15px_0_hsla(0,0%,8%,0.12),0_0_4px_0_hsla(0,0%,8%,0.10)] flex flex-col">
        {/* All pages option */}
        <div
          className="group flex items-center justify-between cursor-pointer pr-[15px] pl-[22px] py-[3.5px] "
          onClick={handleAllPagesToggle}
        >
          <span className="font-normal text-[hsl(var(--text-primary))]">
            All Pages
          </span>
          <Checkbox
            checked={isAllPagesChecked}
            onCheckedChange={handleAllPagesToggle}
            onClick={handleAllPagesToggle}
          />
        </div>
        <div className="px-[15px] py-[10px]">
          <Separator />
        </div>

        <div className="h-[164px] w-[370px]  overflow-y-auto custom-scrollbar">
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              <div
                className="group flex h-[42px] w-[370px] items-center justify-between pr-[15px] pl-[22px] py-2 cursor-pointer"
                onClick={() => handlePageToggle(page)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handlePageToggle(page);
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
            </React.Fragment>
          ))}
        </div>

        <div className="px-[15px] py-[10px]">
          <Separator />
        </div>
        {/* Done button */}
        <div className=" w-[370px]  px-[15px] py-[10px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

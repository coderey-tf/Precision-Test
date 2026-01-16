import { cn } from "@/lib/utils";
import React from "react";

export default function Button({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "w-[340px] h-10 rounded-[4px] px-5 py-2.5 leading-5 rounded-[4px]  transition-none",
        "font-normal text-[14px] leading-5",
        "bg-[hsl(var(--yellow-button))]",
        "hover:bg-[hsl(var(--yellow-button-hover))]",
        "active:bg-[hsl(var(--yellow-button-active))]",
        "transition-none",
        className
      )}
      {...props}
    >
      Done
    </button>
  );
}

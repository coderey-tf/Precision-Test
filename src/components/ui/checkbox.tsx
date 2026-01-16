import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <div
      className={cn(
        "flex h-[35px] w-[35px] items-center justify-center",
        className
      )}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          // Base layout + shape
          "h-[23px] w-[23px] shrink-0 rounded-[6px] border outline-none",

          // Cursor + disabled
          "!cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",

          // Base colors (unchecked)
          "border-[hsl(var(--checkbox-border))]",

          // Checked state colors
          "data-[state=checked]:bg-[hsl(var(--checkbox-checked-bg))]",
          "data-[state=checked]:border-[hsl(var(--checkbox-checked-bg))]",
          "data-[state=checked]:text-white",

          // Focus ring (keyboard)
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",

          // Interaction driven by parent `.group` (row)
          "group-hover:border-[#BDBDBD]",
          "data-[state=checked]:group-hover:bg-[#2469F6]",
          "data-[state=checked]:group-hover:text-[#E3E3E3]",

          // Pressed/active effect driven by parent `.group`
          "group-active:shadow-[0_0_0_3px_rgba(36,105,246,0.10)]",
          "group-active:transition-none",
          "group-active:text-[#878787]",

          // Motion
          "transition-shadow",

          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          forceMount
          data-slot="checkbox-indicator"
          className={cn(
            "grid place-content-center",
            "transition-[opacity,transform,filter] duration-150",

            "group-hover:opacity-100",
            "data-[state=checked]:opacity-100"
          )}
        >
          <CheckIcon className="size-3.5 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  );
}

export { Checkbox };

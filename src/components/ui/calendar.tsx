"use client";

import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from "./utils";
// import { buttonVariants } from "./button";

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DayPicker>
>(({ className, classNames, showOutsideDays = true, ...props }) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      {...props}
    />
  );
});
Calendar.displayName = "Calendar";

export { Calendar };

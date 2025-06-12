import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-primary flex flex-col gap-3 rounded-xl border-2 border-gray-200 bg-white py-6",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("px-6 leading-none", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("space-y-4 px-6", className)} {...props} />;
}

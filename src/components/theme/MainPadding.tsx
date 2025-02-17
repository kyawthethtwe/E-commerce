import React from "react";
import { cn } from "@/lib/utils";

const MainPadding = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        ` relative max-w-[1350px] w-full
    2xl:max-w-[1490px]
    3xl:max-w-[1640px]
    min-[1400px]:max-w-[1300px]
    xl:max-w-[1200px]
    macbook:max-w-[1300px]
   max-xl:px-12
    max-lg:px-8
    max-md:px-6
   max-sm:px-4
    mx-auto`,
        className,
        {}
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default MainPadding;

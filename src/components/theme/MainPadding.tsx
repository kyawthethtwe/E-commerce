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
        ` px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 mx-auto `,
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

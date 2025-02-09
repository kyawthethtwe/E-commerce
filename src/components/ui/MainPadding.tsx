import { cn } from "@/lib/utils";

export default function MainPadding({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("px-8 md:px-16 lg:px-20", className)}>{children}</div>
  );
}
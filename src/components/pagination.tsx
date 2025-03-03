import { useMemo } from "react";
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        // variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  nextPage?: () => void;
  prevPage?: () => void;
  className?: string;
};

const RenderPagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
  nextPage,
  prevPage,
}) => {
  const boundaryCount = 1;
  const siblingCount = 1;

  const itemList = useMemo(() => {
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const startPages = range(1, Math.min(boundaryCount, totalPages));
    const endPages = range(
      Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
      totalPages
    );

    const siblingsStart = Math.max(
      Math.min(
        currentPage - siblingCount,
        totalPages - boundaryCount - siblingCount * 2 - 1
      ),
      boundaryCount + 2
    );

    const siblingsEnd = Math.min(
      Math.max(
        currentPage + siblingCount,
        boundaryCount + siblingCount * 2 + 2
      ),
      endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
    );

    return [
      ...startPages,
      ...(siblingsStart > boundaryCount + 2
        ? ["..."]
        : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : []),
      ...range(siblingsStart, siblingsEnd),
      ...(siblingsEnd < totalPages - boundaryCount - 1
        ? ["..."]
        : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : []),
      ...endPages,
    ];
  }, [currentPage, totalPages, boundaryCount, siblingCount]);

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage && (
          <PaginationItem>
            <Button
              //   variant="ghost"
              className="h-10 rounded-lg border border-highlight  w-24 font-light text-lg text-highlight bg-white hover:bg-highlight-light hover:text-white"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <span className="md:block hidden">previous</span>
              <ChevronLeft className="h-4 w-4 max-md:block hidden" />
            </Button>
          </PaginationItem>
        )}
        {itemList.map((item, index) => (
          <PaginationItem key={index}>
            <Button
              //   variant={currentPage === item ? "outline" : "ghost"}
              className={cn(
                " w-10 h-10 rounded-lg border border-highlight font-light text-lg text-highlight px-0 py-0 bg-white hover:bg-highlight-light hover:text-white",
                {
                  "bg-highlight text-white": currentPage === item,
                }
              )}
              onClick={() => typeof item === "number" && onPageChange(item)}
            >
              {item === "..." ? <PaginationEllipsis /> : item}
            </Button>
          </PaginationItem>
        ))}

        {nextPage && (
          <PaginationItem>
            <Button
              //   variant="ghost"
              className={cn(
                " h-10 rounded-lg border border-highlight  w-24 font-light text-lg text-highlight bg-white hover:bg-highlight-light hover:text-white"
              )}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <span className="md:block hidden">next</span>
              <ChevronRight className="h-4 w-4  max-md:block hidden" />
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default RenderPagination;

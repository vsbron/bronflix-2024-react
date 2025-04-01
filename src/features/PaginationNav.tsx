import { PaginationNavProps, SearchSmallArrowProps } from "@/lib/types";

import Button from "@/components/ui/Button";
import { BASE_GAP_CLASS } from "@/lib/constants";

function PaginationNav({
  page,
  totalPages,
  handlePageChange,
}: PaginationNavProps) {
  // Returned JSX
  return (
    <>
      {/* prettier-ignore */}
      <div className={`flex items-center max-md:gap-y-6 max-md:gap-3 ${BASE_GAP_CLASS}`}>
        <Button disabled={page === 1} onClick={()=>handlePageChange(1)} label="Go to the first page">
          <span><PaginationSmallArrow dir="left">&laquo;</PaginationSmallArrow><span className="max-sm:hidden"> First</span></span>
        </Button>
        <Button disabled={page === 1} onClick={()=>handlePageChange(page-1)} label="Go to previous page">
          <span><PaginationSmallArrow dir="left">&lsaquo;</PaginationSmallArrow> Prev</span>
        </Button>
      <div className="text-[1.4rem] xs:text-[1.5rem] mx-2 xs:mx-6 sm:mx-12">Page <b>{page}</b>/<b>{totalPages}</b></div>
        <Button disabled={page === totalPages} onClick={()=>handlePageChange(page+1)} label="Go to next page">
          <span>Next <PaginationSmallArrow dir="right">&rsaquo;</PaginationSmallArrow></span>
        </Button>
        <Button disabled={page === totalPages} onClick={()=>handlePageChange(totalPages)} label="Go to the last page">
          <span><span className="max-sm:hidden">Last </span><PaginationSmallArrow dir="right">&raquo;</PaginationSmallArrow></span>
        </Button>
      </div>
    </>
  );
}

export default PaginationNav;

// Helper component for small arrow in button
function PaginationSmallArrow({ children, dir }: SearchSmallArrowProps) {
  // Returned JSX
  return (
    <span
      className={`inline-block text-4xl leading-[0.6] md:leading-[1] relative max-md:top-[1px] ${dir === "left" ? "mr-1" : "ml-1"}`}
    >
      {children}
    </span>
  );
}

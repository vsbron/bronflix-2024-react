import { SearchPaginationProps, SearchSmallArrowProps } from "@/lib/types";

import Button from "@/components/ui/Button";

function SearchPagination({
  page,
  totalPages,
  handlePageChange,
}: SearchPaginationProps) {
  // Returned JSX
  return (
    <>
      {/* prettier-ignore */}
      <div className="flex items-center gap-6">
        <Button disabled={page === 1} onClick={()=>handlePageChange(1)}>
          <span><SearchSmallArrow dir="left">&laquo;</SearchSmallArrow> First</span>
        </Button>
        <Button disabled={page === 1} onClick={()=>handlePageChange(page-1)}>
          <span><SearchSmallArrow dir="left">&lsaquo;</SearchSmallArrow> Prev</span>
        </Button>
        <div className="mx-12">Page <b>{page}</b> out of <b>{totalPages}</b></div>
        <Button disabled={page === totalPages} onClick={()=>handlePageChange(page+1)}>
          <span>Next <SearchSmallArrow dir="right">&rsaquo;</SearchSmallArrow></span>
        </Button>
        <Button disabled={page === totalPages} onClick={()=>handlePageChange(totalPages)}>
          <span>Last <SearchSmallArrow dir="right">&raquo;</SearchSmallArrow></span>
        </Button>
      </div>
    </>
  );
}

export default SearchPagination;

// Helper component for small arrow in button
function SearchSmallArrow({ children, dir }: SearchSmallArrowProps) {
  // Returned JSX
  return (
    <span
      className={`inline-block text-4xl ${dir === "left" ? "mr-1" : "ml-1"}`}
    >
      {children}
    </span>
  );
}

import Button from "@/components/ui/Button";

function SearchPagination() {
  // Returned JSX
  return (
    <div className="flex items-center gap-6 ml-[12%]">
      <Button>
        <span>
          <SmallArrow dir="left">&laquo;</SmallArrow> First
        </span>
      </Button>
      <Button>
        <span>
          <SmallArrow dir="left">&lsaquo;</SmallArrow> Prev
        </span>
      </Button>
      <div className="mx-12">
        Page <b>1</b> out of <b>30</b>
      </div>
      <Button>
        <span>
          Next <SmallArrow dir="right">&rsaquo;</SmallArrow>
        </span>
      </Button>
      <Button>
        <span>
          Last <SmallArrow dir="right">&raquo;</SmallArrow>
        </span>
      </Button>
    </div>
  );
}

export default SearchPagination;

// Helper component for small arrow in button
function SmallArrow({
  children,
  dir,
}: {
  children: any;
  dir: "left" | "right";
}) {
  // Returned JSX
  return (
    <span
      className={`inline-block text-4xl ${dir === "left" ? "mr-1" : "ml-1"}`}
    >
      {children}
    </span>
  );
}

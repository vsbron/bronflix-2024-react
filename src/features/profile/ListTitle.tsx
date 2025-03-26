import { ListTitleProps } from "@/lib/types";

function ListTitle({ children }: ListTitleProps) {
  // Returned JSX
  return (
    <div className="text-[1.7rem] md:text-[2.2rem] font-heading uppercase -mt-2 mb-3">
      {children}
    </div>
  );
}

export default ListTitle;

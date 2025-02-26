import { ListTitleProps } from "@/lib/types";

function ListTitle({ children }: ListTitleProps) {
  // Returned JSX
  return <div className="text-[2rem] mt-10 mb-2">{children}</div>;
}

export default ListTitle;

import { WrapperProps } from "@/lib/types";

function Wrapper({ children }: WrapperProps) {
  // Returned JSX
  return (
    <div className={"flex flex-col gap-10 pl-12 md:pl-0 pr-12 mt-24 md:mt-0"}>
      {children}
    </div>
  );
}

export default Wrapper;

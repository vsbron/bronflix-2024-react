import { WrapperProps } from "../lib/types";

function Wrapper({ children }: WrapperProps) {
  // Returned JSX
  return <div className={"flex flex-col gap-12 pr-12"}>{children}</div>;
}

export default Wrapper;

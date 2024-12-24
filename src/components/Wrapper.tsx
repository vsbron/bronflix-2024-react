import { WrapperProps } from "../lib/types";

function Wrapper({ children }: WrapperProps) {
  // Returned JSX
  return <div className="flex flex-col gap-2">{children}</div>;
}

export default Wrapper;

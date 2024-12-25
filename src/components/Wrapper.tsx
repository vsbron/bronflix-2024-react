import { WrapperProps } from "../lib/types";

function Wrapper({ children, className }: WrapperProps) {
  // Returned JSX
  return (
    <div className={`flex flex-col gap-16 pr-12 ${className}`}>{children}</div>
  );
}

export default Wrapper;

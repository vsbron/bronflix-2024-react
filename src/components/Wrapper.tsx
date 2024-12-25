import { WrapperProps } from "../lib/types";

function Wrapper({ children }: WrapperProps) {
  // Returned JSX
  return (
    <div className="flex flex-col gap-8 pb-12 pr-12 min-h-screen">
      {children}
    </div>
  );
}

export default Wrapper;

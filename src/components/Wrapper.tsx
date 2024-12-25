import { WrapperProps } from "../lib/types";

function Wrapper({ children, className }: WrapperProps) {
  // Returned JSX
  return (
    <div
      className={`flex flex-col gap-8 pb-12 pr-12 min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;

import { ButtonProps } from "@/lib/types";

function Button({ children }: ButtonProps) {
  // Returned JSX
  return (
    <div className="inline-block font-bold rounded-lg bg-button-gradient cursor-pointer hover:bg-gradient-to-r hover:from-stone-50 hover:to-stone-50 hover:text-red-900">
      {children}
    </div>
  );
}

export default Button;

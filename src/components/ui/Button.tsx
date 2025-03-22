import { Children, cloneElement, isValidElement } from "react";

import { ButtonProps } from "@/lib/types";

function Button({
  onClick,
  children,
  isActive = false,
  type,
  disabled = false,
  label,
}: ButtonProps) {
  // Creating new props for the children component
  const newProps = {
    className: "inline-block px-4 py-2 md:px-6 md:py-3",
  };

  // Returned JSX
  return (
    <button
      className={`inline-block font-bold rounded-lg cursor-pointer text-white hover:bg-none hover:bg-stone-50 hover:text-red-900 disabled:cursor-not-allowed uppercase text-[1.4rem] md:text-[1.6rem] ${
        isActive ? "bg-button-gradient--active" : "bg-button-gradient"
      } disabled:bg-none disabled:bg-stone-600 disabled:text-stone-50`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={label}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, newProps) : child
      )}
    </button>
  );
}

export default Button;

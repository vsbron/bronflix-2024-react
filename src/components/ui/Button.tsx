import { Children, cloneElement, isValidElement } from "react";

import { ButtonProps } from "@/lib/types";

function Button({
  onClick,
  children,
  isActive = false,
  type,
  disabled = false,
}: ButtonProps) {
  // Creating new props for the children component
  const newProps = {
    style: { display: "inline-block", padding: "0.75rem 1.5rem" },
  };

  // Returned JSX
  return (
    <button
      className={`inline-block font-bold rounded-lg cursor-pointer text-white hover:bg-none hover:bg-stone-50 hover:text-red-900 disabled:cursor-not-allowed uppercase ${
        isActive ? "bg-button-gradient--active" : "bg-button-gradient"
      } disabled:bg-none disabled:bg-stone-600 disabled:text-stone-50`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, newProps) : child
      )}
    </button>
  );
}

export default Button;

import { Children, cloneElement, isValidElement } from "react";

import { ButtonProps } from "@/lib/types";

function Button({ isActive = false, onClick, children }: ButtonProps) {
  // Creating new props for the children component
  const newProps = {
    style: { display: "inline-block", padding: "0.75rem 1.5rem" },
  };

  // Returned JSX
  return (
    <div
      className={`inline-block font-bold rounded-lg cursor-pointer text-white hover:bg-none hover:bg-stone-50 hover:text-red-900 ${
        isActive ? "bg-button-gradient--active" : "bg-button-gradient"
      }`}
      onClick={onClick}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, newProps) : child
      )}
    </div>
  );
}

export default Button;

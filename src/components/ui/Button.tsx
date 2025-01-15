import { Children, cloneElement, isValidElement } from "react";

import { ButtonProps } from "@/lib/types";

function Button({ onClick, children }: ButtonProps) {
  // Creating new props for the children component
  const newProps = {
    style: { display: "inline-block", padding: "0.75rem 1.5rem" },
  };

  // Returned JSX
  return (
    <div
      className="inline-block font-bold rounded-lg bg-button-gradient cursor-pointer hover:bg-gradient-to-r hover:bg-stone-50 text-white hover:text-red-900"
      onClick={onClick}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, newProps) : child
      )}
    </div>
  );
}

export default Button;

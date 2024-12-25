import { HeadingProps } from "../lib/types";

function Heading({ children, as = "h1" }: HeadingProps) {
  // Constant to hold the correct element
  let element;

  // Switch statement to determine the right header
  switch (as) {
    case "h1":
      element = <h1>{children.toUpperCase()}</h1>;
      break;
    case "h2":
      element = <h2>{children}</h2>;
      break;
  }

  // Returned JSX
  return (
    <div className="px-6 pt-2 pb-3 my-4 bg-custom-gradient w-[50%]">
      {element}
    </div>
  );
}

export default Heading;

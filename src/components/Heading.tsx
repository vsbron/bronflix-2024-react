import { HeadingProps } from "../lib/types";

function Heading({ children, as = "h1" }: HeadingProps) {
  // Constant to hold the correct element
  let element;

  // Switch statement to determine the right header
  switch (as) {
    case "h1":
      element = <h1 className="-mt-0.5">{children.toUpperCase()}</h1>;
      break;
    case "h2":
      element = <h2>{children}</h2>;
      break;
  }

  // Returned JSX
  return (
    <div className="px-6 pt-2 pb-3 mt-4 mb-6 bg-heading-gradient w-[50%] rounded-md">
      {element}
    </div>
  );
}

export default Heading;

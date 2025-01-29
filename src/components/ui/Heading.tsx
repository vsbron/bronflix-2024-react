import { HeadingProps } from "@/lib/types";

function Heading({ children, as = "h1", id }: HeadingProps) {
  // Constant to hold the correct element
  let element;

  // Switch statement to determine the right header
  switch (as) {
    case "h1":
      element = <h1 className="-mt-0.5">{children.toUpperCase()}</h1>;
      break;
    case "h2":
      element = <h2 className="m-0">{children}</h2>;
      break;
    case "h3":
      element = <h3 className="m-0">{children}</h3>;
      break;
  }

  // Returned JSX
  return (
    <div id={id} className="px-6 pt-2 pb-3 mt-12 first:mt-6 mb-6 bg-heading-gradient w-[70%] rounded-md uppercase col-span-full">
      {element}
    </div>
  );
}

export default Heading;

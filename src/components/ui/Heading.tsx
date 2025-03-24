import { HeadingProps } from "@/lib/types";

function Heading({ children, as = "h1", id }: HeadingProps) {
  // Constant to hold the correct element
  let element;

  // Switch statement to determine the right header
  switch (as) {
    case "h1":
      element = (
        <h1 className="text-4xl max-md:pt-0.5 md:text-5xl my-0 md:mt-[0.3rem] md:mb-[0.4rem]">
          {children.toUpperCase()}
        </h1>
      );
      break;
    case "h2":
      element = (
        <h2 className="text-[2rem] md:text-[2.5rem] m-0">{children}</h2>
      );
      break;
    case "h3":
      element = (
        <h3 className="text-[1.8rem] md:text-[2.2rem] m-0">{children}</h3>
      );
      break;
  }

  // Returned JSX
  return (
    <div
      id={id}
      className="px-4 md:px-6 pt-2 pb-3 mt-12 first:mt-6 mb-6 text-stone-50 bg-heading-gradient w-full sm:w-[70%] rounded-md uppercase col-span-full"
    >
      {element}
    </div>
  );
}

export default Heading;

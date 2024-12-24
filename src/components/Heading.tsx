// Union for the headers
type Headings = "h1" | "h2";

function Heading({ children, as = "h1" }: { children: string; as?: Headings }) {
  // Constant to hold the correct element
  let Element;

  // Switch statement to determine the right header
  switch (as) {
    case "h1":
      Element = <h1>{children}</h1>;
      break;
    case "h2":
      Element = <h2>{children}</h2>;
      break;
  }

  return <div className="bg-red-950">{Element}</div>;
}

export default Heading;

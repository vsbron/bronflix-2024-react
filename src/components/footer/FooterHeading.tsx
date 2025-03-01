import { FooterHeadingProps } from "@/lib/types";

function FooterHeading({ children }: FooterHeadingProps) {
  // Returned JSX
  return (
    <div className="text-3xl mb-4 font-heading uppercase text-stone-50">
      {children}
    </div>
  );
}

export default FooterHeading;

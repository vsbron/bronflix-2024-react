import {
  FormErrorProps,
  FormGroupProps,
  FormLabelErrorProps,
} from "@/lib/types";

//////////////////////////////
//* Helper form components *//
//////////////////////////////

// Grouping component
export function FormGroup({ children }: FormGroupProps) {
  // Returned JSX
  return (
    <div className="flex flex-col self-stretch sm:items-start">{children}</div>
  );
}

// Component for displaying label and possible error
export function FormLabelError({ name, children }: FormLabelErrorProps) {
  // Returned JSX
  return (
    <div className="flex gap-4 mb-2 text-[1.5rem] xs:text-2xl">
      <label
        htmlFor={name[0].toLowerCase() + name.slice(1).replaceAll(" ", "")}
      >
        {name}
      </label>
      {children}
    </div>
  );
}

// The error message
export function FormError({ children }: FormErrorProps) {
  // Returned JSX
  return <span className="text-red-300">{children}</span>;
}

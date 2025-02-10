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
  return <div className="flex flex-col items-start">{children}</div>;
}

// Component for displaying label and possible error
export function FormLabelError({ name, children }: FormLabelErrorProps) {
  return (
    <div className="flex gap-4 mb-2">
      <label htmlFor={name.toLowerCase()}>{name}</label>
      {children}
    </div>
  );
}

// The error message
export function FormError({ children }: FormErrorProps) {
  return <span className="text-red-300">{children}</span>;
}

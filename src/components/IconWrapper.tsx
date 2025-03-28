import { IconWrapperProps } from "@/lib/types";

export function IconWrapper({ icon, children }: IconWrapperProps) {
  // Returned JSX
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 md:w-8 relative max-md:-top-1 -top-0.5">{icon}</div>
      {children}
    </div>
  );
}

export default IconWrapper;

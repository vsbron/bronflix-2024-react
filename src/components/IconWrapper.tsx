import { IconWrapperProps } from "@/lib/types";

export function IconWrapper({ icon, children }: IconWrapperProps) {
  // Returned JSX
  return (
    <div className="flex items-end gap-2">
      <div className="w-8">{icon}</div>
      {children}
    </div>
  );
}

export default IconWrapper;

import { IconWrapperProps } from "@/lib/types";

export function IconWrapper({ icon, children }: IconWrapperProps) {
  // Returned JSX
  return (
    <div className="flex items-center gap-2">
      <div className="w-8">{icon}</div>
      {children}
    </div>
  );
}

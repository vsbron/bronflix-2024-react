import { ContentWallProps } from "@/lib/types";

function ContentWall({ children }: ContentWallProps) {
  // Returned JSX
  return (
    <div className="content-wall max-xs:text-[1.5rem] max-w-[100rem]">
      {children}
    </div>
  );
}

export default ContentWall;

import { ContentWallProps } from "@/lib/types";

function ContentWall({ children }: ContentWallProps) {
  return <div className="content-wall max-w-[100rem]">{children}</div>;
}

export default ContentWall;

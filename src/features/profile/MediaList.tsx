import { Link } from "react-router-dom";

import { MediaListProps } from "@/lib/types";

import PreviewImage from "@/components/previews/PreviewImage";

function MediaList({ items, type }: MediaListProps) {
  let title;
  switch (type) {
    case "movies":
      title = "Movies";
      break;
    case "shows":
      title = "Shows";
      break;
    case "person":
      title = "People";
  }

  // Guard clause
  if (items.length === 0)
    return (
      <p>
        Your {type} list is empty. You can navigate to our{" "}
        <Link to={`/${type}/`}>{type}</Link> section and start to fill it
      </p>
    );

  // Returned JSX
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {items.map((item) => (
          <Link
            to={`/${type}/${item.id}`}
            className="basis-[14rem] h-[21rem]"
            key={item.id}
          >
            <PreviewImage media={item} type={type} hud={false} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MediaList;

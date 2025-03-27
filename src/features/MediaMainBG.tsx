import { MediaMainBGProps } from "@/lib/types";

function MediaMainBG({ type }: MediaMainBGProps) {
  // Declaring class for correct background image
  let backgroundImages;
  switch (type) {
    case "movies":
      backgroundImages = "movies-main-bg";
      break;
    default:
      backgroundImages = "shows-main-bg";
      break;
  }

  // Returned JSX
  return (
    <div
      className={`h-[15rem] sm:h-[20rem] md:h-[30rem] bg-[610px_auto] sm:bg-[738px_auto] md:bg-[920px_auto] lg:bg-[1174px_auto] xl:bg-[1815px_auto] ${backgroundImages} animate-mainPageBg sm:animate-mainPageBgSM md:animate-mainPageBgMD lg:animate-mainPageBgLG xl:animate-mainPageBgXL relative`}
    >
      <div className="absolute inset-0 bg-featured-gradient-3" />
    </div>
  );
}

export default MediaMainBG;

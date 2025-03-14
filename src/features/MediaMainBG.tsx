function MediaMainBG({ type }: any) {
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
      className={`h-[30rem] bg-[1815px_auto] ${backgroundImages} animate-mainPageBg relative`}
    >
      <div className="absolute inset-0 bg-featured-gradient-3" />
    </div>
  );
}

export default MediaMainBG;

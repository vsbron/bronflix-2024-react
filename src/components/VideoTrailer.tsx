import { useResponsive } from "@/hooks/useResponsive";

function VideoTrailer({ video }: { video: string }) {
  // Getting the number of media queries from custom hook
  const { isXS, isSM, isMD, isLG } = useResponsive();

  let videoWidth, videoHeight;

  switch (true) {
    case isSM:
      videoWidth = "320";
      videoHeight = "180";
      break;
    case isMD:
      videoWidth = "390";
      videoHeight = "220";
      break;
    case isLG:
      videoWidth = "600";
      videoHeight = "338";
      break;
    default:
      videoWidth = "800";
      videoHeight = "450";
  }

  // Returned JSX
  return (
    <>
      {video !== "" ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width={videoWidth}
            height={videoHeight}
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      ) : (
        <div className="text-stone-50 px-20 py-8 flex justify-center items-center text-center text-3xl leading-snug">
          Sorry, no trailer available
          <br />
          Please try again later...
        </div>
      )}
    </>
  );
}

export default VideoTrailer;

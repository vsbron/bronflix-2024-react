import { useResponsive } from "@/hooks/useResponsive";
import { NO_MOVIE_POSTER, NO_PERSON_PHOTO, NO_SHOW_COVER } from "@/lib/assets";
import { MEDIA_IMG_URL } from "@/lib/constants";
import { PreviewImageProps } from "@/lib/types";
import { IBase } from "@/lib/typesAPI";
import { useUser } from "@/redux/reducers/userReducer";

import ScorePreview from "@/components/ScorePreview";
import IsInUserList from "@/components/previews/IsInUserList";
import { BlackGradientToTop } from "@/components/ui/Overlays";

function PreviewImage({
  media,
  type = "movie",
  children,
  posters,
  hud = true,
}: PreviewImageProps) {
  // Getting the image data
  const { imageKey, fallback } = getImageData(type);

  // Getting user id from redux store
  const { uid } = useUser();

  // Getting the MD media query from custom hook
  const { isMD } = useResponsive();

  // Build the final image path
  const imgPath = media[posters ? "poster_path" : imageKey];
  const backgroundImage = `url(${
    imgPath ? MEDIA_IMG_URL + "w500" + imgPath : fallback
  })`;

  // Returned JSX
  return (
    <div
      style={{ backgroundImage }}
      className="rounded-lg h-full flex items-end bg-center bg-cover duration-300 transition-all hover:scale-95 relative pt-3"
    >
      {children}
      {(!imgPath || (!posters && type !== "movies" && type !== "shows")) && (
        <div
          className="relative w-full text-[1.7rem] md:text-[2rem] px-3 pb-2 pt-20"
          // prettier-ignore
          style={type === "tv" ? { padding: isMD ? "2.5rem .5rem .5rem" : "2.5rem 1.5rem .75rem"} : {}}
        >
          <BlackGradientToTop height="90%" />
          <h3 className="relative z-10 text-[1.5rem] md:text-[1.7rem] lg:text-[2rem]">
            {media.name || media.title}
          </h3>
        </div>
      )}
      {media.vote_average !== undefined && (
        <ScorePreview score={media.vote_average} />
      )}
      {hud && uid && <IsInUserList type={type} id={media.id} />}
    </div>
  );
}

export default PreviewImage;

//////////////////////////////////////////////////
// Helper function that returns correct image data
export const getImageData = (type: string) => {
  // Getting the correct image attribute
  const IMAGE_KEYS: Record<string, keyof IBase> = {
    person: "profile_path",
    tv: "backdrop_path",
    movie: "poster_path",
    collection: "backdrop_path",
  };

  // Preparing fallback in case of missing image
  const FALLBACK_IMAGES: Record<string, string> = {
    person: NO_PERSON_PHOTO,
    tv: NO_SHOW_COVER,
    movie: NO_MOVIE_POSTER,
    collection: NO_MOVIE_POSTER,
  };

  // Return the image data object
  return {
    imageKey: IMAGE_KEYS[type] || "poster_path",
    fallback: FALLBACK_IMAGES[type] || NO_MOVIE_POSTER,
  };
};

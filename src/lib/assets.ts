import noMoviePoster from "@/assets/noMoviePoster.png";
import noMovieCover from "@/assets/noMovieCover.png";
import noPersonPhoto from "@/assets/noPersonPhoto.png";
import noShowPoster from "@/assets/noMoviePoster.png";
import noShowCover from "@/assets/noShowCover.png";
import noAvatarPng from "@/assets/noAvatar1.png";
import noAvatarWebp from "@/assets/noAvatar1.webp";

export const NO_MOVIE_POSTER = noMoviePoster;
export const NO_MOVIE_COVER = noMovieCover;
export const NO_SHOW_POSTER = noShowPoster;
export const NO_SHOW_COVER = noShowCover;
export const NO_PERSON_PHOTO = noPersonPhoto;
export const NO_AVATAR_WEBP = noAvatarWebp;
export const NO_AVATAR_PNG = noAvatarPng;

// Create an array of avatars from the imported files
const avatarImages = import.meta.glob("@/assets/avatars/*.png", {
  eager: true,
});
export const AVATARS = Object.keys(avatarImages).map(
  (path) => avatarImages[path]
);

import { Helmet } from "react-helmet-async";

import { META_TITLE_END } from "@/lib/metaTags";
import { useUser } from "@/redux/reducers/userReducer";

import Separator from "@/components/ui/Separator";
import ProfileDetails from "@/features/profile/ProfileDetails";

function Profile() {
  // Getting the user name from the Redux
  const { name } = useUser();

  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{`${name}'s Profile${META_TITLE_END}`}</title>
        <meta
          name="description"
          content="View and modify your profile information, including your personalized watch and like lists. Manage your preferences and keep track of your favorite movies, shows, and people"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <ProfileDetails />
      <Separator />
      {/* <MoviesToWatch />
      <ShowsToWatch />
      <LikedMovies />
      <LikedShows />
      <LikedActors /> */}
    </>
  );
}
export default Profile;

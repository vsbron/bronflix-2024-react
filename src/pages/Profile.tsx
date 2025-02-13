import { Helmet } from "react-helmet-async";

import { META_TITLE_END } from "@/lib/metaTags";
import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";

function Profile() {
  // Getting the user from the Redux
  const { uid, name, email } = useUser();

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
      <Heading>Profile</Heading>
      <section>
        <h3>Hello {name}</h3>
        <h4>Email: {email}</h4>
        <h5>ID: {uid}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          eveniet ex consequatur in ducimus pariatur quam laboriosam modi. At
          esse adipisci cupiditate excepturi beatae quaerat quam voluptatem
          earum aliquam ipsa.
        </p>
      </section>
    </>
  );
}
export default Profile;

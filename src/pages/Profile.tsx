import Heading from "@/components/ui/Heading";
import { useAuth } from "@/redux/reducers/authReducer";
import { Helmet } from "react-helmet-async";

function Profile() {
  // Getting the user from the Redux
  const { user } = useAuth();

  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{`Profile`}</title>
        <meta name="description" content={``} />
        <meta name="keywords" content={``} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <Heading>Profile</Heading>
      <section>
        <h3>Hello {user.name}</h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        eveniet ex consequatur in ducimus pariatur quam laboriosam modi. At esse
        adipisci cupiditate excepturi beatae quaerat quam voluptatem earum
        aliquam ipsa.
      </section>
    </>
  );
}
export default Profile;

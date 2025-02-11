import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet-async";

function Profile() {
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        eveniet ex consequatur in ducimus pariatur quam laboriosam modi. At esse
        adipisci cupiditate excepturi beatae quaerat quam voluptatem earum
        aliquam ipsa.
      </section>
    </>
  );
}
export default Profile;

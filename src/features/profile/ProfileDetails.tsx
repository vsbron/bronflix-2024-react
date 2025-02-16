import { useUser } from "@/redux/reducers/userReducer";
import { formatDate } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";

function ProfileDetails() {
  // Getting the user data from the Redux
  const { uid, name, email, createdAt } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading>Profile</Heading>
      <h3>Hello {name}</h3>
      <h4>Email: {email}</h4>
      <h5>ID: {uid}</h5>
      <h5>Created at: {formatDate(createdAt)}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        eveniet ex consequatur in ducimus pariatur quam laboriosam modi. At esse
        adipisci cupiditate excepturi beatae quaerat quam voluptatem earum
        aliquam ipsa.
      </p>
    </section>
  );
}

export default ProfileDetails;

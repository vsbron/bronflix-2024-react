import Heading from "../../components/Heading";
import { MOVIES_IMG_URL } from "../../lib/constants";
import { IActor } from "../../lib/types";

function ActorDetails({ actor }: { actor: IActor }) {
  // Handling the actor data
  const birthday = new Date(actor.birthday).toString();

  // Returned JSX
  return (
    <div>
      <Heading>{actor.name}</Heading>
      <img src={`${MOVIES_IMG_URL}w200${actor.profile_path}`} />
      <div>Name: {actor.name}</div>
      <div>Gender: {actor.gender}</div>
      <div>Birthday: {birthday}</div>
      <div>Place of Birth: {actor.place_of_birth}</div>
      <div>
        Biography:
        <br />
        {actor.biography}
      </div>
    </div>
  );
}

export default ActorDetails;

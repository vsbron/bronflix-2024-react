import { useState } from "react";

import { useUser } from "@/redux/reducers/userReducer";
import { BASE_GAP_CLASS } from "@/lib/constants";
import Button from "@/components/ui/Button";

function RateMedia({
  type,
  name,
  id,
}: {
  type: "movie" | "show";
  name: string;
  id: number;
}) {
  // Getting the user data from redux store
  const { ratedMovies, ratedShows } = useUser();

  // Assigning the correct rated list
  const ratedArray = type === "movie" ? ratedMovies : ratedShows;
  const currentRate = ratedArray.find((m) => m.id === id)?.rate;

  // Setting the state for the updating state and the current rate of the media
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [rate, setRate] = useState<number | undefined>(
    currentRate || undefined
  );

  // Button handlers
  const updateRate = () => {};
  const removeRate = () => {};

  // Returned JSX
  return (
    <div className="flex flex-col gap-8 py-6">
      <h3 className="text-4xl mt-0 text-center">
        Place your rating on the{" "}
        <span className="text-5xl block mt-2">{name}</span>
      </h3>
      <div className="flex justify-center gap-10">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i + 1}
            className={`inline-block border border-red-700 p-5 rounded-md leading-none cursor-pointer  transition-colors ${
              i + 1 === rate
                ? "bg-red-700 hover:bg-red-700"
                : "hover:bg-red-900"
            }`}
            onClick={() => setRate(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className={`mt-2 self-center flex ${BASE_GAP_CLASS}`}>
        <Button onClick={removeRate} disabled={isSubmitting}>
          <span>REMOVE RATING</span>
        </Button>
        <Button onClick={updateRate} disabled={isSubmitting}>
          <span>SAVE RATING</span>
        </Button>
      </div>
    </div>
  );
}

export default RateMedia;

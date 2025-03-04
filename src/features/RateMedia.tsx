import { useState } from "react";

import { useUser } from "@/redux/reducers/userReducer";

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

  // Setting the state for the current rate of the media
  const [rate, setRate] = useState<number | undefined>(
    currentRate || undefined
  );

  // Returned JSX
  return (
    <>
      <h3 className="text-4xl mb-8 mt-0">Rate {name}</h3>
      <div className="flex justify-center gap-10">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i + 1}
            className={`inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors ${
              i + 1 === rate ? "bg-red-700" : ""
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </>
  );
}

export default RateMedia;

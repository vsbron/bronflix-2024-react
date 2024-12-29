import { Link } from "react-router-dom";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

function ExploreMore() {
  return (
    <div className="relative">
      <Heading as="h2">More content to explore</Heading>
      <div className="w-1/2">
        <p>
          Dive into our expansive library of movies, TV series, and celebrity
          profiles. Explore action-packed blockbusters, heartwarming dramas, and
          mind-bending thrillers, with detailed information on each title,
          including plot summaries, cast, and ratings. Discover trending titles,
          top-rated classics, or search for something specific using the{" "}
          <strong>search bar</strong> at the top of the page. Browse our{" "}
          <strong>genres</strong> and curated <strong>movie collections</strong>{" "}
          from franchises to themed lists - and dive into each{" "}
          <strong>season</strong> and <strong>episode</strong> of your favorite
          shows.
        </p>
        <p>
          If you're a member, you can save movies and shows to your{" "}
          <strong>favorites</strong> list, or add items to your{" "}
          <strong>future watch list</strong> to keep track of what you're
          excited to see. Stay up-to-date with everything trending in the world
          of entertainment, whether you're discovering new content or revisiting
          timeless classics.
        </p>
      </div>
      <div className="flex gap-8 mt-8 mb-1">
        <Button>
          <Link className="inline-block py-3 px-6" to="/movies">
            MOVIES
          </Link>
        </Button>
        <Button>
          <Link className="inline-block py-3 px-6" to="/series">
            SERIES
          </Link>
        </Button>
        <Button>
          <Link className="inline-block py-3 px-6" to="/actors">
            ACTORS
          </Link>
        </Button>
      </div>
      <div
        style={{ backgroundImage: "url(/explore-bg-2x.png)" }}
        className="absolute -top-10 -bottom-16 right-0 w-[60%] bg-cover -z-10 opacity-75"
      ></div>
    </div>
  );
}

export default ExploreMore;

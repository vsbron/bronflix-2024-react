import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Link } from "react-router-dom";

function ExploreMore() {
  return (
    <div>
      <Heading>More content to explore</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet
        libero ab similique nemo molestias repellat id cupiditate animi ut?
        Incidunt adipisci enim eos soluta minus officiis nemo dignissimos
        reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
        aperiam repellendus ad doloremque suscipit incidunt quia. Voluptate
        molestias perferendis sint, facere tempora molestiae iure ex magni eum
        aliquam! Distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Illo eveniet libero ab similique nemo molestias repellat id
        cupiditate animi ut? Incidunt adipisci enim eos soluta minus officiis
        nemo dignissimos reiciendis.
      </p>
      <div className="flex gap-8 mt-8">
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
    </div>
  );
}

export default ExploreMore;

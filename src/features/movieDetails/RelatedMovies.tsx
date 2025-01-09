import { Link } from "react-router-dom";

import { useMovieCollection } from "./useMovieCollection";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import PreviewImage from "@/components/previews/PreviewImage";
import Ribbon from "@/components/previews/Ribbon";
import { IMovieList } from "@/lib/typesAPI";

function RelatedMovies({ collectionId }: { collectionId: number }) {
  const { isLoading, data, error } = useMovieCollection(collectionId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching related movies"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Related Movies</Heading>
      <Ribbon length={data.parts.length} isScrollByOne={true}>
        {data.parts.map((movie: IMovieList) => (
          <div
            className="block basis-80 flex-shrink-0 rounded-lg overflow-x-hidden"
            key={movie.id}
          >
            <div className="h-[30rem] cursor-pointer">
              <Link to={`/movies/${movie.id}`}>
                <PreviewImage media={movie} type={"movies"} />
              </Link>
            </div>
          </div>
        ))}
      </Ribbon>
    </section>
  );
}

export default RelatedMovies;

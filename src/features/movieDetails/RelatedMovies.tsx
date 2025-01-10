import { Link } from "react-router-dom";

import { RelatedMoviesProps } from "@/lib/types";
import { IMovieList } from "@/lib/typesAPI";

import { useMovieCollection } from "./useMovieCollection";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import PreviewImage from "@/components/previews/PreviewImage";
import Ribbon from "@/components/previews/Ribbon";

function RelatedMovies({ collectionId, movieId }: RelatedMoviesProps) {
  // Getting the collection data from the React Query
  const { isLoading, data, error } = useMovieCollection(collectionId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching related movies"}
      </div>
    );

  // Getting the related movies array
  const relatedMovies = data.parts;

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Related Movies</Heading>
      <Ribbon length={relatedMovies.length} isScrollByOne={true}>
        {relatedMovies.map(
          (movie: IMovieList) =>
            movieId !== movie.id && (
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
            )
        )}
      </Ribbon>
    </section>
  );
}

export default RelatedMovies;

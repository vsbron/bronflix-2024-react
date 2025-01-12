import { Link } from "react-router-dom";

import { useMovieSimilar } from "./useMovieSimilar";
import { MoviesSimilarProps } from "@/lib/types";
import { IMovieList } from "@/lib/typesAPI";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { PreviewImage } from "@/components/previews/Previews";
import Ribbon from "@/components/previews/Ribbon";

function MoviesSimilar({ movieId }: MoviesSimilarProps) {
  // Getting the similar movies data from the React Query
  const { isLoading, data: similarMovies, error } = useMovieSimilar(movieId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !similarMovies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching similar movies"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h3">You may also like</Heading>
      <Ribbon length={similarMovies.length} isScrollByOne={true}>
        {similarMovies.map(
          (movie: IMovieList) =>
            movieId !== movie.id && (
              <div
                className="block basis-72 flex-shrink-0 rounded-lg overflow-x-hidden"
                key={movie.id}
              >
                <div className="h-[27rem] cursor-pointer">
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

export default MoviesSimilar;

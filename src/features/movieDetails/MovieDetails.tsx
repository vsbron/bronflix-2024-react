import MovieCast from "./MovieCast";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IGenre, IMovie, IProductionCompany } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

function MovieDetails({ movie }: { movie: IMovie }) {
  // Handling the movie data
  const headingTitle = `${movie.title} (${new Date(movie.release_date)
    .getFullYear()
    .toString()})`;
  const genres = movie.genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = movie.origin_country
    .map((country: string) => country)
    .join(", ");
  const productionCompanies = movie.production_companies
    .map((company: IProductionCompany) => company.name)
    .join(", ");

  // Returned JSX
  return (
    <>
      <section>
        <Heading>{headingTitle}</Heading>

        <div className="flex items-stretch rounded-lg overflow-hidden">
          <img
            src={`${MOVIES_IMG_URL}w400${movie.poster_path}`}
            className="basis-96"
          />
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}/original/${movie.backdrop_path})`,
            }}
            className="bg-no-repeat bg-cover basis-full relative flex flex-col justify-end px-8 py-4"
          >
            <div className="absolute inset-0 bg-stone-950/80" />
            <div className="relative z-10">
              <div>Released: {formatDate(movie.release_date)}</div>
              <div>Runtime: {movie.runtime} minutes</div>
              <div>Budget: {movie.budget}</div>
              <div>Genres: {genres}</div>
              <div>Country: {originCountry}</div>
              <div>Production Company: {productionCompanies}</div>
              <div>Language: {movie.original_language.toUpperCase()}</div>
            </div>
          </div>
        </div>

        <div>{movie.tagline}</div>
        <div>Overview: {movie.overview}</div>
      </section>

      <MovieCast />
    </>
  );
}

export default MovieDetails;

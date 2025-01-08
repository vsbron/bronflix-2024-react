import MovieCast from "./MovieCast";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IGenre, IMovie, IProductionCompany } from "@/lib/typesAPI";

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
    <div>
      <Heading>{headingTitle}</Heading>
      <img src={`${MOVIES_IMG_URL}w200${movie.poster_path}`} />
      <div>Name: {movie.title}</div>
      <div>Tagline: {movie.tagline}</div>
      <div>Overview: {movie.overview}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Runtime: {movie.runtime} minutes</div>
      <div>Budget: {movie.budget}</div>
      <div>Genres: {genres}</div>
      <div>Country: {originCountry}</div>
      <div>Production Company: {productionCompanies}</div>
      <div>Language: {movie.original_language.toUpperCase()}</div>
      <MovieCast />
    </div>
  );
}

export default MovieDetails;

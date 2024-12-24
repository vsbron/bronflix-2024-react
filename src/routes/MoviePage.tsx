import { useParams } from "react-router-dom";

import { useSpecificMovie } from "../hooks/useSpecificMovie";
import { MOVIES_IMG_URL } from "../lib/constants";

function MoviePage() {
  const { id } = useParams();

  if (!id) return null;

  // Getting the random movie
  const { isLoading, movie, error } = useSpecificMovie(id);

  console.log(movie);

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  // Returned JSX
  return (
    <div className="min-h-screen">
      <img src={`${MOVIES_IMG_URL}w200${movie.poster_path}`} />
      <div>Name: {movie.title}</div>
      <div>Tagline: {movie.tagline}</div>
      <div>Overview: {movie.overview}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Runtime: {movie.runtime} minutes</div>
      <div>Budget: {movie.budget}</div>
      {movie.genres && (
        <div>
          Genres:{" "}
          {movie.genres
            .map((genre: { id: number; name: string }) => (
              <div key={id}>{genre.name}</div>
            ))
            .join(", ")}
        </div>
      )}
      <div>
        Country:{" "}
        {movie.origin_country.map((country: string) => (
          <div key={country}>{country}</div>
        ))}
      </div>
      <div>
        Production Company:{" "}
        {movie.production_companies.map(
          (company: { id: number; logo_path: string; name: string }) => (
            <div key={id}>{company.name}</div>
          )
        )}
      </div>
      <div>Language: {movie.original_language.toUpperCase()}</div>
    </div>
  );
}

export default MoviePage;

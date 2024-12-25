import Heading from "../../components/Heading";
import { MOVIES_IMG_URL } from "../../lib/constants";
import { IGenre, IProductionCompany, IShow } from "../../lib/types";

function ShowDetails({ show }: { show: IShow }) {
  console.log(show);

  // Handling the show data
  const headingTitle = `${show.name} (${new Date(show.first_air_date)
    .getFullYear()
    .toString()})`;
  const genres = show.genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = show.origin_country
    .map((country) => country)
    .join(", ");
  const productionCompanies = show.production_companies
    .map((company: IProductionCompany) => company.name)
    .join(", ");

  // Returned JSX
  return (
    <div>
      <Heading>{headingTitle}</Heading>
      <img src={`${MOVIES_IMG_URL}w200${show.poster_path}`} />
      <div>Name: {show.name}</div>
      <div>Tagline: {show.tagline}</div>
      <div>Overview: {show.overview}</div>
      <div>Release Date: {show.first_air_date}</div>
      <div>Runtime: {show.episode_run_time} minutes</div>
      <div>Genres: {genres}</div>
      <div>Country: {originCountry}</div>
      <div>Production Company: {productionCompanies}</div>
      <div>Language: {show.original_language.toUpperCase()}</div>
    </div>
  );
}

export default ShowDetails;

import { Helmet } from "react-helmet-async";

import { META_APP_INFO_DESC, META_APP_INFO_TITLE } from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";
import ContentWall from "@/components/ui/ContentWall";

function AppInfo() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_APP_INFO_TITLE}</title>
        <meta name="description" content={META_APP_INFO_DESC} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Content */}
      <section>
        <Heading>App Info</Heading>
        <ContentWall>
          <p>
            This is a Netflix-inspired application built with modern
            technologies, providing an interactive platform for exploring
            movies, shows, and actors.
          </p>
          <p>
            It features an index page, as well as separate pages for movies,
            shows, and people, along with additional technical pages. Key
            functionalities include dynamic content from the TMDB API, a sleek
            and responsive UI, and intuitive navigation.
          </p>

          <hr />

          <h2>Contents</h2>
          <ul>
            <li>
              <a href="#project-overview">Project Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#page-descriptions">Page Descriptions</a>
              <ul>
                <li>
                  <a href="#index-page">Index Page</a>
                </li>
                <li>
                  <a href="#movie-page">Movie Page</a>
                </li>
                <li>
                  <a href="#show-page">Show Page</a>
                </li>
                <li>
                  <a href="#person-page">Person Page</a>
                </li>
                <li>
                  <a href="#collection-page">Collection Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#technical-details">Technical Details</a>
            </li>
            <li>
              <a href="#live-version">Live version</a>
            </li>
          </ul>

          <hr />

          <h2 id="project-overview">Project Overview</h2>
          <p>
            BroNflix allows users to explore movies, TV shows, and actors with
            dynamic content fetched from the TMDB API. It includes:
          </p>
          <ul>
            <li>
              <strong>Core Components</strong>: A responsive header, side
              navigation, and footer for smooth navigation.
            </li>
            <li>
              <strong>Dynamic Content</strong>: Movies, shows, and actors are
              fetched from the TMDB API and shuffled on every visit, providing a
              fresh set of recommendations.
            </li>
            <li>
              <strong>Modern UI/UX</strong>: Sleek design with a responsive
              layout and intuitive navigation.
            </li>
          </ul>

          <hr />
          <h2 id="features">Features</h2>
          <ul>
            <li>
              <strong>Interactive Content</strong>: The index page includes a
              variety of sections such as 'What's Hot?', 'Trending Shows',
              'Trending Actors', and more, offering a dynamic browsing
              experience. Each section presents a carousel of movies, shows, and
              actors, offering users a variety of recommendations.
            </li>
            <li>
              <strong>Detailed Pages</strong>: Each movie, show, and actor has
              its dedicated page with rich information, including posters,
              overviews, cast/crew, and similar recommendations.
            </li>
            <li>
              <strong>Seamless Navigation</strong>: Users can click on items to
              navigate to their respective pages for more detailed information.
            </li>
          </ul>

          <hr />

          <h2 id="page-descriptions">Page Descriptions</h2>

          <h3 id="index-page">Index Page</h3>
          <p>The main page features several sections, including:</p>
          <ul>
            <li>
              <strong>What's Hot?</strong>: A carousel showcasing movies, where
              the selected movie displays detailed information like name, score,
              genres, and offers options to view the trailer or navigate to its
              page.
            </li>
            <li>
              <strong>Trending Content</strong>: A dynamic mix of carousels
              featuring trending shows, actors, top-rated movies, and top-rated
              shows, allowing users to explore popular content across various
              categories. Each item in the carousels is clickable and takes the
              user to the respective movie, show, or actor page. All content on
              the index page is shuffled for a fresh set of recommendations with
              every visit.
            </li>
          </ul>

          <h3 id="movie-page">Movie Page</h3>
          <p>Displays comprehensive information about a movie, including:</p>
          <ul>
            <li>
              Movie poster, cover image, ratings, release information, and other
              essential details.
            </li>
            <li>A button to watch the trailer.</li>
            <li>
              If the movie is part of a collection, a button to explore the
              collection.
            </li>
            <li>Cast carousel featuring actors photos and their roles.</li>
            <li>
              Crew section highlighting key contributors such as the director,
              writer, and producer.
            </li>
            <li>
              "Movies You May Also Like" carousel with genre-based
              recommendations.
            </li>
          </ul>

          <h3 id="show-page">Show Page</h3>
          <p>Similar to the movie page, but with additional details:</p>
          <ul>
            <li>
              Displays the series' timespan, current status, and number of
              episodes.
            </li>
            <li>
              An episode guide, where users can choose a season and view
              episodes with overviews, air dates, and snapshot.
            </li>
            <li>
              Series cast carousel featuring actors photos and their roles.
            </li>
            <li>
              Crew section highlighting key contributors such as producers.
            </li>
            <li>"Shows You May Also Like" carousel for recommendations.</li>
          </ul>

          <h3 id="person-page">Person Page</h3>
          <p>Provides in-depth details about an actor or crew member:</p>
          <ul>
            <li>
              Displays a profile image, name, gender, birthday, and biography.
            </li>
            <li>
              A "Notable Work" carousel featuring the movies and shows they are
              most known for.
            </li>
            <li>
              A complete filmography list, including both acting and crew roles,
              with each entry clickable for more details.
            </li>
          </ul>

          <h3 id="collection-page">Collection Page</h3>
          <p>
            Accessed from a movie page within a collection. Displays the movie's
            poster, a brief overview, and a list of movies included in the
            collection.
          </p>

          <hr />

          <h2 id="technical-details">Technical Details</h2>
          <ul>
            <li>
              <strong>Framework</strong>: React with TypeScript for type safety
              and scalability.
            </li>
            <li>
              <strong>Routing</strong>: React Router v6.4 for seamless
              navigation.
            </li>
            <li>
              <strong>Icons</strong>: HeroIcons for modern and consistent UI
              elements.
            </li>
            <li>
              <strong>State Management</strong>: Context API for managing global
              state.
            </li>
            <li>
              <strong>API</strong>: TMDB API for fetching movies, shows, and
              actor data.
            </li>
            <li>
              <strong>Meta Management</strong>: React Helmet Async is used to
              manage dynamic meta tags, improving SEO and social sharing by
              dynamically adjusting the title, description, and other meta
              information based on the page the user is on.
            </li>
          </ul>
        </ContentWall>
      </section>
    </>
  );
}

export default AppInfo;

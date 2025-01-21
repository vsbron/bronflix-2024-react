# BroNflix

This project reimagines a Netflix-inspired application using modern technologies, providing an interactive platform for exploring movies, shows, and actors.

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Page Descriptions](#page-descriptions)
   - [Index Page](#index-page)
   - [Movie Page](#movie-page)
   - [Show Page](#show-page)
   - [Actor Page](#actor-page)
4. [Technical Details](#technical-details)

---

## Project Overview

The app includes the following sections and pages:

- **Main Sections:** Featured Movies, Trending Shows, Trending Actors, and Top Rated Movies.
- **Individual Pages:** Detailed information pages for movies, shows, and actors, dynamically fetched based on ID.
- **Core Components:** A responsive header, side navigation, and footer for smooth navigation.

## Features

- **Dynamic Content:** Movies, shows, and actors are fetched from the TMDB API and displayed in a shuffled order for a fresh experience.
- **Interactive Sections:** A featured movie section with auto-cycling and manual navigation.
- **Detailed Pages:** Explore in-depth details for movies, shows, and actors on dedicated pages.
- **Modern UI/UX:** Sleek design with responsive layout and intuitive navigation.

## Page Descriptions

### Index Page

- **Featured Movie:**  
  Highlights a selected movie with basic details and an option to watch its trailer. Automatically cycles to the next featured movie, with manual navigation controls available.

- **Trending Content:**  
  Displays shuffled lists of popular shows, trending actors, and critically acclaimed movies & shows, offering a variety of recommendations on a single page.

### Movie Page

- Displays a poster and cover of the movie alongside detailed information, including:
  - Ratings, release date, country, studio, budget, overview of the movie, etc.
  - Option to watch the movie trailer directly on the page.
- Showcases the cast, including main actors and key crew members such as the director, writers, composer, producers and others.
- Includes a section labeled "You May Also Like," featuring similar movies or recommendations.

### Show Page

- Features in-depth details about a selected show.

### Person Page

- Displays detailed information about the person, including:
  - Name, birthday, place of birth, and biography.
- Showcases notable works with a movie poster carousel, featuring clickable movie posters that link to individual movie pages.
- Includes an expandable filmography section, displaying:
  - Roles for actors (e.g., character names).
  - Job titles for crew members (e.g., director, producer, writer).

### Collection Page

- Accessed from a movie page within a collection
- Displays the movie's poster, along with a brief overview and a list of movies included in the collection.

## Technical Details

- **Framework:** React with TypeScript for type safety and scalability.
- **Routing:** React Router v6.4 for seamless navigation.
- **Icons:** HeroIcons for modern and consistent UI elements.
- **State Management:** Context API for managing global state.
- **API:** TMDB API for fetching movies, shows, and actor data.
- **Meta Management:** React Helmet Async for handling dynamic meta tags and improving SEO and social sharing.

## Live version

https://vsbronflix.netlify.app/

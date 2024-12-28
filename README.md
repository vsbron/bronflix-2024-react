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

- **Featured Movie Component:**

  - Highlights a selected movie with basic details.
  - Automatically cycles to the next featured movie after a set interval.
  - Allows manual selection of movies via navigation controls.

- **Trending Shows Section:**

  - Displays a shuffled list of popular shows.

- **Trending Actors Section:**

  - Highlights trending actors in a randomized order.

- **Top Rated Movies Section:**
  - Showcases a shuffled list of critically acclaimed movies.

### Movie Page

- Provides detailed information about a selected movie.
- Displays relevant metadata, including release date, ratings, and overview.
- Related movies or recommendations may be shown in a sidebar.

### Show Page

- Features in-depth details about a selected show.
- Includes seasons, episodes, and related cast information when available.

### Actor Page

- Displays detailed actor profiles.
- Includes biography, filmography, and notable works.

## Technical Details

- **Framework:** React with TypeScript for type safety and scalability.
- **Routing:** React Router v6.4 for seamless navigation.
- **Icons:** HeroIcons for modern and consistent UI elements.
- **State Management:** Context API for managing global state.
- **API:** TMDB API for fetching movies, shows, and actor data.

## Live version

https://vsbronflix.netlify.app/

# BroNflix

This is a Netflix-inspired application built with modern technologies, providing an interactive platform for exploring movies, shows, and actors.

It features an index page, as well as separate pages for movies, shows, and people, along with additional technical pages. Key functionalities include dynamic content from the TMDB API, a sleek and responsive UI, and intuitive navigation.

---

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Page Descriptions](#page-descriptions)
   - [Index Page](#index-page)
   - [Movie Page](#movie-page)
   - [Show Page](#show-page)
   - [Person Page](#person-page)
   - [Collection Page](#collection-page)
   - [Profile Page](#profile-page)
   - [Additional Pages](#additional-pages)
4. [Technical Details](#technical-details)
5. [Live version](#live-version)

---

## Project Overview

BroNflix allows users to explore movies, TV shows, and actors with dynamic content fetched from the TMDB API. It includes:

- **Core Components**: A responsive header, side navigation, and footer for smooth navigation.
- **Dynamic Content**: Movies, shows, and actors are fetched from the TMDB API and shuffled on every visit, providing a fresh set of recommendations.
- **Modern UI/UX**: Sleek design with a responsive layout and intuitive navigation.

---

## Features

- **Interactive Content**: The index page includes a variety of sections such as 'What's Hot?', 'Trending Shows', 'Trending Actors', and more, offering a dynamic browsing experience. Each section presents a carousel of movies, shows, and actors, offering users a variety of recommendations.
- **Detailed Pages**: Each movie, show, and actor has its dedicated page with rich information, including posters, overviews, cast/crew, and similar recommendations.
- **Seamless Navigation**: Users can click on items to navigate to their respective pages for more detailed information.
- **User Authentication**: Users can sign up, log in, and access their personalized profile, enhancing their experience with saved preferences and recommendations.

### Search Functionality

- **Search Bar**: The search bar allows users to search for movies, TV shows, or people. The top three results are displayed instantly, with an option to view all available results.

- **Search Results Page**:
  - Displays detailed results based on the user's query.
  - Includes pagination for navigating through large numbers of results.
  - Shows the total number of results and the current page.

---

## Page Descriptions

### **Index Page**

The main page features several sections, including:

- **What's Hot?**: A carousel showcasing movies, where the selected movie displays detailed information like name, score, genres, and offers options to view the trailer or navigate to its page.
- **Trending Content**: A dynamic mix of carousels featuring trending shows, actors, top-rated movies, and top-rated shows, allowing users to explore popular content across various categories. Each item in the carousels is clickable and takes the user to the respective movie, show, or actor page. All content on the index page is shuffled for a fresh set of recommendations with every visit.

### **Movie Page**

Displays comprehensive information about a movie, including:

- Movie poster, cover image, ratings, release information, and other essential details.
- A button to watch the trailer.
- If the movie is part of a collection, a button to explore the collection.
- Cast carousel featuring actors photos and their roles.
- Crew section highlighting key contributors such as the director, writer, and producer.
- "Movies You May Also Like" carousel with genre-based recommendations.

### **Show Page**

Similar to the movie page, but with additional details:

- Displays the series' timespan, current status, and number of episodes.
- An episode guide, where users can choose a season and view episodes with overviews, air dates, and snapshot.
- Series cast carousel featuring actors photos and their roles.
- Crew section highlighting key contributors such as producers.
- "Shows You May Also Like" carousel for recommendations.

### **Person Page**

Provides in-depth details about an actor or crew member:

- Displays a profile image, name, gender, birthday, and biography.
- A "Notable Work" carousel featuring the movies and shows they are most known for.
- A complete filmography list, including both acting and crew roles, with each entry clickable for more details.

### **Collection Page**

- Accessed from a movie page within a collection.
- Displays the movie's poster, a brief overview, and a list of movies included in the collection.

### **Profile Page**

The Profile Page serves as the user's hub, displaying their personal details and curated lists.

- User Information: Shows the user's avatar, name, and other basic details.
- Profile Editing: Allows users to update their personal details, such as name and other fields (Uploading avatar is not supported
  due to absence of online storage).
- Password Update: Provides an option to change the account password securely.
- Watchlist: A section where users can track movies and TV shows they plan to watch.
- Favorites: Separate lists for favorite movies, TV shows, and people (actors/crew).
- If a movie, show, or person is included in any of the user's lists, the corresponding icon will be displayed on the media's preview across the site.

### **Additional pages**

Includes supplementary pages such as Contact Us, App Info, About Us, Site Map, Terms of Use and Privacy Policy,

## Technical Details

- **Framework**: React with TypeScript for type safety and scalability.
- **Routing**: React Router v6.4 for seamless navigation.
- **State Management**: Redux for managing global state.
- **Authentication**: Firebase Authentication and Firestore are used to handle secure user sign-up, login, and persistent user data for personalized experiences.
- **Icons**: HeroIcons for modern and consistent UI elements.
- **API**: TMDB API for fetching movies, shows, and actor data.
- **Meta Management**: React Helmet Async is used to manage dynamic meta tags, improving SEO and social sharing by dynamically adjusting the title, description, and other meta information based on the page the user is on.
- **Form Handling**: React Hook Form is used for handling the contact form, with Zod providing schema-based validation to ensure form data integrity.

---

## Future Features

BroNflix is constantly evolving, with several exciting features planned for future updates:

1. **Main Page for Movies, Shows, and People**  
   A unified main page will be added, providing a clear overview of all categories—movies, shows, and actors—allowing users to easily explore each.

2. **Favorites & Watchlist**  
   Users will have the ability to add movies and shows to their favorites or watchlist, making it easier to keep track of content they want to watch.

3. **Voting System**  
   Users will be able to add their votes to movies and shows, contributing to the overall rating and offering a more personalized recommendation experience.

4. **Mobile Layout**  
   A fully optimized mobile layout will be developed to ensure a smooth and engaging experience on smartphones and tablets.

---

## Live version (VPN might be needed)

https://vsbronflix.netlify.app/

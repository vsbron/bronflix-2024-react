import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { onAuthStateChanged } from "firebase/auth";

import { signInUser, signOutUser } from "@/redux/reducers/authReducer";
import { auth } from "@/utils/firebase";

import Home from "@/pages/Home";
import ActorsMain from "@/pages/ActorsMain";
import MoviesMain from "@/pages/MoviesMain";
import Movie, { movieLoader } from "@/pages/Movie";
import MovieCollection, {
  movieCollectionLoader,
} from "@/pages/MovieCollection";
import Person, { personLoader } from "@/pages/Person";
import ShowsMain from "@/pages/ShowsMain";
import Show, { showLoader } from "@/pages/Show";
import SearchResults from "@/pages/SearchResults";
import Profile from "@/pages/Profile";
import ProtectedRoute from "@/pages/ProtectedRoute";

import AboutUs from "@/pages/AboutUs";
import AppInfo from "@/pages/AppInfo";
import ContactUs from "@/pages/ContactUs";
import ErrorForm from "@/pages/ErrorForm";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Sitemap from "@/pages/Sitemap";
import Success from "@/pages/Success";
import TermsOfUse from "@/pages/TermsOfUse";

import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";
import ErrorMedia from "@/components/errorBoundary/ErrorMedia";
import Layout from "@/components/ui/Layout";

// Setting up the query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

// Setting the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MoviesMain />,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
        loader: movieLoader,
        errorElement: <ErrorMedia type="movie" />,
      },
      {
        path: "/movies/collection/:collectionId",
        element: <MovieCollection />,
        loader: movieCollectionLoader,
        errorElement: <ErrorMedia type="collection" />,
      },
      {
        path: "/shows",
        element: <ShowsMain />,
      },
      {
        path: "/shows/:showId",
        element: <Show />,
        loader: showLoader,
        shouldRevalidate: ({ currentUrl, nextUrl }) =>
          currentUrl.pathname !== nextUrl.pathname,
        errorElement: <ErrorMedia type="show" />,
      },
      {
        path: "/actors",
        element: <ActorsMain />,
      },
      {
        path: "/person/:personId",
        element: <Person />,
        loader: personLoader,
        errorElement: <ErrorMedia type="person" />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/profile",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Profile /> }],
      },
      {
        path: "/site-map",
        element: <Sitemap />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/app-info",
        element: <AppInfo />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <TermsOfUse />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/error-form",
        element: <ErrorForm />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  // Getting the dispatch function
  const dispatch = useDispatch();

  // useEffect with event listener for the auth change state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signInUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(signOutUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  // Returned JSX
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;

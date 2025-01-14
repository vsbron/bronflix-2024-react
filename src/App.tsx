import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ActorsMain from "./pages/ActorsMain";
import Actor, { actorLoader } from "./pages/Actor";
import MoviesMain from "./pages/MoviesMain";
import Movie, { movieLoader } from "./pages/Movie";
import MovieCollection, {
  movieCollectionLoader,
} from "./pages/MovieCollection";
import ShowsMain from "./pages/ShowsMain";
import Show, { showLoader } from "./pages/Show";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";

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
      },
      {
        path: "/movies/collection/:collectionId",
        element: <MovieCollection />,
        loader: movieCollectionLoader,
      },
      {
        path: "/shows",
        element: <ShowsMain />,
      },
      {
        path: "/shows/:showId",
        element: <Show />,
        loader: showLoader,
      },
      {
        path: "/actors",
        element: <ActorsMain />,
      },
      {
        path: "/actors/:actorId",
        element: <Actor />,
        loader: actorLoader,
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
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  // Returned JSX
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

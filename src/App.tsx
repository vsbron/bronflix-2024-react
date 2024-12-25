import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/Layout";
import Home from "./routes/Home";
import ActorPage, { actorLoader } from "./routes/ActorPage";
import Movies from "./routes/Movies";
import MoviePage, { movieLoader } from "./routes/MoviePage";
import Shows from "./routes/Shows";
import ShowPage, { showLoader } from "./routes/ShowPage";

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
        element: <Movies />,
      },
      {
        path: "/movies/:movieId",
        element: <MoviePage />,
        loader: movieLoader,
      },
      {
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/shows/:showId",
        element: <ShowPage />,
        loader: showLoader,
      },
      {
        path: "/actors/:actorId",
        element: <ActorPage />,
        loader: actorLoader,
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

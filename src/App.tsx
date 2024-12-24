import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Shows from "./routes/Shows";
import MoviePage from "./routes/MoviePage";
import Movies from "./routes/Movies";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

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
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MoviePage />,
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Shows from "./routes/Shows";
import Movies from "./routes/Movies";
import Layout from "./components/ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/shows",
        element: <Shows />
      },
      {
        path: "/movies",
        element: <Movies />
      }
    ]
  }
])

function App() {
  // Returned JSX
  return (
    <RouterProvider router={router} />
  );
}

export default App;

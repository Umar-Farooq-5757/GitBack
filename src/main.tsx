import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContextProvider } from "./context/AppContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Commits from "./pages/Commits.tsx";
import Contributors from "./pages/Contributors.tsx";
import Releases from "./pages/Releases.tsx";
import Branches from "./pages/Branches.tsx";
import Languages from "./pages/Languages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/languages",
        element: <Languages />,
      },
      {
        path: "/contributors",
        element: <Contributors />,
      },
      {
        path: "/commits",
        element: <Commits />,
      },
      {
        path: "/releases",
        element: <Releases />,
      },
      {
        path: "/branches",
        element: <Branches />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
);

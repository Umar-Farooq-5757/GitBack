import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContextProvider } from "./context/AppContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Settings from "./pages/Settings.tsx";
import Overview from "./pages/Overview.tsx";
import Commits from "./pages/Commits.tsx";
import { Timeline } from "lucide-react";
import Contributors from "./pages/Contributors.tsx";
import Stats from "./pages/Stats.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/commits",
        element: <Commits />,
      },
      {
        path: "/contributors",
        element: <Contributors />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/settings",
        element: <Settings />,
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

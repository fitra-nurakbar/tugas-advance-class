import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Day12 from "./pages/Day-12";
import Day2 from "./pages/Day-2";
import Day3 from "./pages/Day-3";
import Day4 from "./pages/Day-4";
import Day5 from "./pages/Day-5";
import ViewId from "./pages/Day-5/view/[id].jsx";
import Day6 from "./pages/Day-6";
import Hobby from "./pages/Hobby";
import Home from "./pages/Home";
import Test from "./pages/Test";

const router = createBrowserRouter([
  // Root
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  // Day 2
  {
    path: "/day-2",
    element: <Day2 />,
  },
  // Day 3
  {
    path: "/day-3",
    element: <Day3 />,
  },
  // Day 4
  {
    path: "/day-4",
    element: <Day4 />,
  },
  // Day 5
  {
    path: "/day-5",
    element: <Day5 />,
  },
  // Day 5/view/:viewId
  {
    path: "/day-5/view/:id",
    element: <ViewId />,
    errorElement: <PageNotFound />,
  },
  // About
  {
    path: "/about",
    element: <About />,
  },
  // Hobby
  {
    path: "/hobby",
    element: <Hobby />,
  },
  // Day 6
  {
    path: "/day-6",
    element: <Day6 />,
  },
  {
    path: "/day-12",
    element: (
        <Day12 />
    ),
  },
  // Test
  {
    path: "/test",
    element: <Test />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import TheReluctantCyborg from "./pages/books/TheReluctantCyborg";
import DigitalNative from "./pages/books/DigitalNative";
import Voyager20 from "./pages/books/Voyager20";
import Books from "./pages/Books";
import ShortStories from "./pages/ShortStories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/short-stories",
    element: <ShortStories />
  },
  {
    path: "/book/the-reluctant-cyborg",
    element: <TheReluctantCyborg />
  },
  {
    path: "/book/digital-native",
    element: <DigitalNative />
  },
  {
    path: "/book/voyager-2.0",
    element: <Voyager20 />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
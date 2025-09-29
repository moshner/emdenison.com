import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import TheReluctantCyborg from "./pages/books/TheReluctantCyborg";
import DigitalNative from "./pages/books/DigitalNative";
import Books from "./pages/Books";

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
    path: "/book/the-reluctant-cyborg",
    element: <TheReluctantCyborg />
  },
  {
    path: "/book/digital-native",
    element: <DigitalNative />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import TheReluctantCyborg from "./pages/books/TheReluctantCyborg";
import DigitalNative from "./pages/books/DigitalNative";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
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
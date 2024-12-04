import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SocketTestPage from "./pages/SocketTestPage";
import MainPage from "./pages/MainPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/play",
    element: <MainPage />,
  },
  {
    path: "/test",
    element: <SocketTestPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

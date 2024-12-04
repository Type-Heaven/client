import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SocketTestPage from "./pages/SocketTestPage";
import MainPage from "./pages/MainPage";
import "./App.css";
import TestChat from "./pages/TestChat"

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
    element: <TestChat />
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

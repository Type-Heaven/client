import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import "./App.css";
import TestChat from "./pages/TestChat";
import SocketContextProvider from "./contexts/socket/socket.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/play",
    element: <MainPage />,
    loader: () => {
      const player = localStorage.getItem("name");
      if (!player) {
        return redirect("/");
      }
    },
  },
  {
    path: "/test",
    element: <TestChat />,
  },
]);
function App() {
  return (
    <>
      <SocketContextProvider>
        <RouterProvider router={router} />
      </SocketContextProvider>
    </>
  );
}

export default App;

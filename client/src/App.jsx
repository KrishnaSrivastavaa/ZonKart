import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />

    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

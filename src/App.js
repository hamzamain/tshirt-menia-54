import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./componenets/Home/Home";
import Orders from "./componenets/Orders/Orders";
import Grandpa from "./componenets/Grandpa/Grandpa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("tshirts.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/grandpa",
          element: <Grandpa></Grandpa>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

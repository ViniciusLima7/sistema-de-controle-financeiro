import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cadastro from "../pages/Cadastro";
import Categorias from "../pages/Categorias";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/inicio",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/categorias",
        element: <Categorias />,
      },
    ],
  },
]);

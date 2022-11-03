import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cadastro from "../pages/Cadastro";
import Categorias from "../pages/Categorias";
import Dashboard from "../pages/Dashboard";
import Economias from "../pages/Economias";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import SubCategorias from "../pages/SubCategorias";

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
      {
        path: "/subcategorias",
        element: <SubCategorias />,
      },
      {
        path: "/economias",
        element: <Economias />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cadastro from "../pages/Cadastro";
import Categorias from "../pages/Categorias";
import Dashboard from "../pages/Dashboard";
import Economias from "../pages/Economias";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Responsaveis from "../pages/Responsaveis";
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
      {
        path: "/responsaveis",
        element: <Responsaveis />,
      },
      {
        path: "/inscreva-se",
        element: <Login />,
      },
      {
        path: "/cadastro/delete",
        element: <Cadastro />,
      },
      {
        path: "/categorias/delete",
        element: <Categorias />,
      },
      {
        path: "/subcategorias/delete",
        element: <SubCategorias />,
      },
      {
        path: "/economias/delete",
        element: <Economias />,
      },

      {
        path: "/responsaveis/delete",
        element: <Responsaveis />,
      },
      {
        path: "/cadastro/edit",
        element: <Cadastro />,
      },
      {
        path: "/categorias/edit",
        element: <Categorias />,
      },
      {
        path: "/subcategorias/edit",
        element: <SubCategorias />,
      },
      {
        path: "/economias/edit",
        element: <Economias />,
      },

      {
        path: "/responsaveis/edit",
        element: <Responsaveis />,
      },
      {
        path: "/cadastro/add",
        element: <Cadastro />,
      },
      {
        path: "/categorias/add",
        element: <Categorias />,
      },
      {
        path: "/subcategorias/add",
        element: <SubCategorias />,
      },
      {
        path: "/economias/add",
        element: <Economias />,
      },

      {
        path: "/responsaveis/add",
        element: <Responsaveis />,
      },
    ],
  },
]);

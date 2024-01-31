import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "../../pages/login";
import Home from "../../pages/home";
import Todo from "../../pages/todo";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children:[
        {
            path:"",
            element: <Todo/>
        }
    ]
  },
  {
    path: "",
    element: <LogIn />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

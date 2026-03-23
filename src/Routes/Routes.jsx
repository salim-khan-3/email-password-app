import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../components/RegisterForm/Register";
import Login from "../components/LoginForm/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/register",
            Component:Register
        },
        {
            path:"/login",
            Component:Login
        }
    ]
  },
]);
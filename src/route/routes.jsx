import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Offer from "../pages/promo/Offer";

export const routeList = [
   
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/offer",
        element: <Offer />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]
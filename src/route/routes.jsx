import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Offer from "../pages/promo/Offer";
import DetailOffer from "../pages/promo/DetailOffer";
import Activity from "../pages/activity/Activity";
import DetailActivity from "../pages/activity/DetailActivity";
import ActivityByCategorires from "../pages/activity/ActivityByCategorires";
import AllUser from "../pages/dashboard/alluser/AllUser";
import BannerEdit from "../pages/dashboard/bannerEdit/BannerEdit";

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
        path: "/offer/:id",
        element: <DetailOffer />
    },
    {
        path: "/activity",
        element: <Activity/>
    },
    {
        path: "/activities-by-category/:id",
        element: <ActivityByCategorires/>
    },
    {
        path: "/activity/:id",
        element: <DetailActivity />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/dashboard/all-user",
        element: <AllUser/>
    },
    {
        path: "/dashboard/banner",
        element: <BannerEdit />
    }
]
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Offer from "../pages/promo/Offer";
import DetailOffer from "../pages/promo/DetailOffer";
import Activity from "../pages/activity/Activity";
import DetailActivity from "../pages/activity/DetailActivity";
import ActivityByCategorires from "../pages/activity/ActivityByCategorires";
import AllUser from "../pages/alluser/AllUser";
import BannerEdit from "../pages/bannerEdit/BannerEdit";
import BannerDetail from "../pages/bannerEdit/BannerDetail";
import PromoEdit from "../pages/promoEdit/PromoEdit";
import PromoDetailEdit from "../pages/promoEdit/PromoDetailEdit";
import CategoryEdit from "../pages/categoryEdit/CategoryEdit";
import CategoryDetailEdit from "../pages/categoryEdit/CategoryDetailEdit";
import ActivityEdit from "../pages/activityEdit/ActivityEdit";
import ActivityDetailEdit from "../pages/activityEdit/ActivityDetailEdit";
import Contact from "../pages/contactus/Contact";


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
        path: "/contactus",
        element: <Contact />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/all-user",
        element: <AllUser/>
    },
    {
        path: "/dashboard/banner",
        element: <BannerEdit />
    },
    { 
        path: "/dashboard/banner/:id",
        element: <BannerDetail />
    },
    {
        path: "/dashboard/offer",
        element: <PromoEdit />
    },
    {
        path: "/dashboard/offer/:id",
        element: <PromoDetailEdit />
    },
    {
        path: "/dashboard/category",
        element: <CategoryEdit />
    },
    {
        path: "/dashboard/category/:id",
        element: <CategoryDetailEdit />
    },
    { 
        path: "/dashboard/activity",
        element: <ActivityEdit/>
    },
    {
        path: "/dashboard/activity/:id",
        element: <ActivityDetailEdit/>
    },

]
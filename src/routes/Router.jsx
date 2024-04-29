import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage"
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot"
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot"
import MyList from "../pages/MyList/MyList"
import PrivateRoute from "./PrivateRoute";
import TouristSpotDetails from "../pages/AllTouristsSpot/TouristsSpots/TouristSpotDetails";
import UpdateTouristSpot from "../pages/MyList/UpdateTouristSpot/UpdateTouristSpot";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/create_account',
                element: <CreateAccount />
            },

            {
                path: '/add_tourists_spot',
                element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>
            },

            {
                path: '/all_tourists_spot',
                element: <AllTouristsSpot />
            },

            {
                path: '/my_list',
                element: <PrivateRoute><MyList /></PrivateRoute>
            },

            {
                path: '/tourist_spot/:id',
                element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-blue-iota.vercel.app/tourist_spots')
            },

            {
                path: '/update_tourist_spot/:id',
                element: <PrivateRoute><UpdateTouristSpot /></PrivateRoute>
            }
        ]
    }    
]);

export default router;
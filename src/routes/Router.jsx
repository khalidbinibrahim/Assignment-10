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
                element: <AllTouristsSpot />,
                loader: () => fetch('http://localhost:5000/add_tourists_spot')
            },

            {
                path: '/my_list',
                element: <PrivateRoute><MyList /></PrivateRoute>
            }
        ]
    }    
]);

export default router;
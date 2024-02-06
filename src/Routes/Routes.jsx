import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AdminLogin from "../Pages/Login/AdminLogin";
import AdminDashboard from "../Layout/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/adminlogin",
                element: <AdminLogin />
            }
        ]
    },
    {
        path: "/admindashboard",
        element: <AdminDashboard />,
        children: [
            {
                path: ""
            }
        ]
    }
]);
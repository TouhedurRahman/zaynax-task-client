import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AdminLogin from "../Pages/Login/AdminLogin";
import AdminDashboard from "../Layout/AdminDashboard";
import Products from "../Pages/AdminDashboard/Products/Products";
import AddNewProduct from "../Pages/AdminDashboard/AddNewProduct/AddNewProduct";

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
                path: "products",
                element: <Products />
            },
            {
                path: "addnewproduct",
                element: <AddNewProduct />
            }
        ]
    }
]);
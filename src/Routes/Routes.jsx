import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AdminLogin from "../Pages/Login/AdminLogin";
import AdminDashboard from "../Layout/AdminDashboard";
import Products from "../Pages/AdminDashboard/Products/Products";
import AddNewProduct from "../Pages/AdminDashboard/AddNewProduct/AddNewProduct";
import AddPromoCodes from "../Pages/AdminDashboard/AddPromoCodes/AddPromoCodes";
import PromoCodes from "../Pages/AdminDashboard/PromoCodes/Promocodes";
import UpdatePromoCode from "../Pages/AdminDashboard/UpdatePromoCode/UpdatePromoCode";
import Cart from "../Pages/Home/Cart/Cart";
import Orders from "../Pages/AdminDashboard/Orders/Orders";
import AllOrders from "../Pages/AdminDashboard/AllOrders/AllOrders";
import PendingOrders from "../Pages/AdminDashboard/PendingOrders/PendingOrders";
import ConfirmedOrders from "../Pages/AdminDashboard/ConfirmedOrders/ConfirmedOrders";
import CanceledOrders from "../Pages/AdminDashboard/CanceledOrders/CanceledOrders";

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
                path: "/cart",
                element: <Cart />
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
                path: "promocodes",
                element: <PromoCodes />
            },
            {
                path: "addpromocodes",
                element: <AddPromoCodes />
            },
            {
                path: "update-promo/:id",
                element: <UpdatePromoCode />
            },
            {
                path: "orders",
                element: <Orders />,
                children: [
                    {
                        path: "all-orders",
                        element: <AllOrders />
                    },
                    {
                        path: "pending-orders",
                        element: <PendingOrders />
                    },
                    {
                        path: "confirmed-orders",
                        element: <ConfirmedOrders />
                    },
                    {
                        path: "canceled-orders",
                        element: <CanceledOrders />
                    }
                ]
            },
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
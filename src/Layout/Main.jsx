import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isAdminPages = location.pathname.includes('adminlogin') || location.pathname.includes('admindashboard');
    return (
        <div>
            {
                isAdminPages || <Navbar />
            }
            <Outlet ></Outlet>
        </div>
    );
};

export default Main;
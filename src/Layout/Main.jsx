import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('adminlogin');
    return (
        <div>
            {
                isLoginPage || <Navbar />
            }
            <Outlet ></Outlet>
        </div>
    );
};

export default Main;
import { NavLink, Outlet } from "react-router-dom";
import AdminNavbar from "../Pages/Shared/AdminNavbar/AdminNavbar";
import { useState } from "react";

const AdminDashboard = () => {
    const [showPromoButtons, setShowPromoButtons] = useState(false);

    const handlePromotionClick = () => {
        setShowPromoButtons(!showPromoButtons);
    };

    return (
        <div>
            <AdminNavbar />
            <div className="drawer lg:drawer-open border-e-2">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[white] text-base-content">
                        {/* Sidebar content here */}

                        <li>
                            <NavLink onClick={handlePromotionClick}>Promotion</NavLink>
                            {
                                showPromoButtons &&
                                <>
                                    <li><NavLink to="/">Order</NavLink></li>
                                    <li><NavLink to="/">Products</NavLink></li>
                                </>
                            }
                        </li>
                        <li><NavLink to="/">Order</NavLink></li>
                        <li><NavLink to="/">Products</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
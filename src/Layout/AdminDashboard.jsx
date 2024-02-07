import { Link, Outlet } from "react-router-dom";
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
                    <div className="m-5">
                        <Outlet />
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[white] text-base-content">
                        {/* Sidebar content here */}

                        <li>
                            <Link onClick={handlePromotionClick}>Promotion</Link>
                            {
                                showPromoButtons &&
                                <>
                                    <li><Link to="//admindashboard/promocodes">Promo Codes</Link></li>
                                    <li><Link to="/admindashboard/addpromocodes">Add Promo Codes</Link></li>
                                </>
                            }
                        </li>
                        <li><Link to="/admindashboard/orders">Order</Link></li>
                        <li><Link to="/admindashboard/products">Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
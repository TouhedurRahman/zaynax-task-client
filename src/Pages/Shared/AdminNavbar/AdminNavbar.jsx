import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {

    return (
        <nav className="bg-white p-4 flex justify-between items-center border-b-2">
            <div className="flex items-center ml-5">
                <div className="text-black font-bold text-xl">Logo</div>
            </div>
            <div className="flex items-center">
                <Link to="/" className="flex justify-between items-center text-black mr-5">
                    Admin panel
                </Link>

            </div>
        </nav>
    );
};

export default AdminNavbar;
// Navbar.js
import { useState } from 'react';
import { FaUserShield } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    return (
        <nav className="bg-white p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center ml-5">
                <div className="text-black font-bold text-xl">Logo</div>
            </div>
            <div className="bg-white boder-0 border-b-2">
                <input
                    type="text"
                    placeholder="🔍 Search"
                    className="px-4 py-2 rounded-md bg-white text-black"
                    style={{ minWidth: '800px' }}
                />
            </div>
            <div className="flex items-center">
                <Link to="/cart" className="flex justify-between items-center text-black mr-5">
                    <div className="flex items-center hover:bg-gray-200 rounded-lg p-3">
                        <FaCartPlus size={20} />
                        <span className='mx-2'>Cart</span>
                        <span className="bg-yellow-500 rounded-full px-2 text-black">{2}</span>
                    </div>
                </Link>
                <button className="text-black mr-5 hover:bg-gray-200 rounded-lg p-3" onClick={toggleUserDropdown}>
                    <FaUserShield size={20} />
                </button>
                {
                    isUserDropdownOpen && (
                        <div className="absolute right-0 mt-32 w-48 bg-white shadow-lg rounded-lg">
                            <Link to="/" className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200">
                                User Login
                            </Link>
                            <Link to="/adminlogin" className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Admin Login
                            </Link>
                        </div>
                    )
                }

            </div>
        </nav>
    );
};

export default Navbar;
import { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
  const { shop, logoutShop } = useContext(ShopContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logoutShop();
    navigate("/");
  };

  return (
    <nav className="bg-white text-black p-3 shadow-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/stockmate_icon.png"
            alt="StockMate Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <span className="text-2xl font-bold text-orange-500">StockMate</span>
        </Link>

        {/* Grid-Style Menu Icon for Mobile/Tablet */}
        <div className="relative md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <div className="grid grid-cols-2 gap-1">
              <span className="block w-3 h-3 bg-black rounded"></span>
              <span className="block w-3 h-3 bg-black rounded"></span>
              <span className="block w-3 h-3 bg-black rounded"></span>
              <span className="block w-3 h-3 bg-black rounded"></span>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-50">
              {!shop ? (
                <>
                  <NavLink
                    to="/features"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Features
                  </NavLink>
                  <NavLink
                    to="/solutions"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Solutions
                  </NavLink>
                  <NavLink
                    to="/integrations"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Integrations
                  </NavLink>
                  <NavLink
                    to="/resources"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Resources
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-blue-500 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="block px-4 py-2 text-blue-500 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/inventory"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Inventory
                  </NavLink>
                  <NavLink
                    to="/warehouses"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Warehouses
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Links for Desktop View */}
        <div className="hidden md:flex space-x-4">
          {!shop && (
            <>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Solutions
              </NavLink>
              <NavLink
                to="/integrations"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Integrations
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Resources
              </NavLink>
            </>
          )}
          {shop && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Inventory
              </NavLink>
              <NavLink
                to="/warehouses"
                className={({ isActive }) =>
                  `hover:text-blue-500 px-2 py-1 rounded-md ${
                    isActive ? "bg-blue-400" : ""
                  }`
                }
              >
                Warehouses
              </NavLink>
            </>
          )}
        </div>

        {/* Authentication Section - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {shop ? (
            <>
              <span className="text-lg">Welcome, {shop.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

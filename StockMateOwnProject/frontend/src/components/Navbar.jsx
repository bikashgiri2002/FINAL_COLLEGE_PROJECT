import { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
  const { shop, logoutShop } = useContext(ShopContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
  };

  const handleLogout = () => {
    logoutShop();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[rgba(255,255,255,0.8)] dark:bg-gray-800 text-black dark:text-white p-2 shadow-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="/stockmate_icon.png"
            alt="StockMate Logo"
            className={`h-13 w-15 transition-all duration-300 ${
              theme === "dark"
                ? "invert brightness-100 contrast-210 saturate-180"
                : ""
            }`}
          />
          <span className="text-3xl font-bold text-orange-400 dark:text-orange-300">
            StockMate
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {!shop ? (
            <>
              {["home", "features", "resources", "about"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item == "home" ? "" : item}`}
                  className={({ isActive }) =>
                    `hover:text-blue-500 px-3 py-2 rounded-md ${
                      isActive ? "bg-blue-400 text-white" : ""
                    } dark:hover:text-blue-300 dark:hover:bg-gray-700`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
            </>
          ) : (
            <>
              {["dashboard", "inventory", "warehouses"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  className={({ isActive }) =>
                    `hover:text-blue-500 px-3 py-2 rounded-md ${
                      isActive ? "bg-blue-400 text-white" : ""
                    } dark:hover:text-blue-300 dark:hover:bg-gray-700`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
            </>
          )}

          {/* Auth Section */}
          {shop ? (
            <div className="flex items-center space-x-4">
              <span className="text-lg dark:text-white">
                Welcome, {shop.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-white ${
                    isActive ? "bg-gray-400" : "bg-blue-400"
                  } dark:bg-blue-600 dark:hover:bg-blue-700`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-white ${
                    isActive ? "bg-gray-400" : "bg-blue-400"
                  } dark:bg-blue-600 dark:hover:bg-blue-700`
                }
              >
                Sign Up
              </NavLink>
            </>
          )}

          {/* Dark Mode Toggle with Icon */}
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          {!shop ? (
            <>
              {["home", "features", "resources", "about"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  className="block px-4 py-2 rounded-md hover:bg-blue-200 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                className="block bg-blue-400 text-white px-4 py-2 rounded-md mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 w-25"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block bg-blue-400 text-white px-4 py-2 rounded-md mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 w-25"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              {["dashboard", "inventory", "warehouses"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  className="block px-4 py-2 rounded-md hover:bg-blue-200 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 mx-4 rounded-md hover:bg-red-700 w-25"
             >
                Logout
              </button>
            </>
          )}

          {/* Mobile Theme Toggle */}
          <div className="flex items-center px-4 py-2">
            <span className="mr-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            <button
              onClick={toggleTheme}
              className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-600" />
              ) : (
                <FiMoon className="text-blue-600" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

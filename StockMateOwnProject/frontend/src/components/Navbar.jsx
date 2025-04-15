import { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className="bg-[rgba(255,255,255,0.8)] dark:bg-gray-800 text-black dark:text-white p-2 shadow-md w-full">
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src={
              theme === "dark"
                ? "/stock-mate-logo-dark.png"
                : "/stockmate_icon.png"
            }
            alt="StockMate Logo"
            className="h-12 w-12"
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
          {/* Navigation Links */}
          {!shop ? (
            <>
              {["features", "solutions", "integrations", "resources"].map(
                (item) => (
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
                )
              )}
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

          {/* Auth Buttons / Greeting */}
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
            <div className="flex space-x-4">
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
                Register
              </NavLink>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          {!shop ? (
            <>
              {["features", "solutions", "integrations", "resources"].map(
                (item) => (
                  <NavLink
                    key={item}
                    to={`/${item}`}
                    className="block px-4 py-2 rounded-md hover:bg-blue-200 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                )
              )}
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
                className="bg-red-500 text-white px-4 py-2 mx-4 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {!shop && (
            <>
              <NavLink
                to="/login"
                className="block bg-blue-400 text-white px-4 py-2 rounded-md mx-4 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block bg-blue-400 text-white px-4 py-2 rounded-md mx-4 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}

          {/* Theme Toggle inside Mobile */}
          <div className="flex items-center px-4 py-2">
            <span className="mr-2">Dark Mode</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
  const { shop, logoutShop } = useContext(ShopContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

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

  return (
    <nav className="bg-[rgba(255,255,255,0.8)] dark:bg-gray-900 text-black dark:text-white p-2 shadow-md w-full overflow-x-auto">
      <div className="flex justify-between items-center space-x-4">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="/stockmate_icon.png"
            alt="StockMate Logo"
            className="h-18 w-18"
          />
          <span className="text-3xl font-bold text-orange-400 dark:text-orange-300">
            StockMate
          </span>
        </Link>

        {/* Navigation Links */}
        {!shop && (
          <div className="flex space-x-6 flex-wrap">
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
          </div>
        )}

        {/* Authenticated Links */}
        {shop && (
          <div className="flex space-x-6 flex-wrap">
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
          </div>
        )}

        {/* Auth Buttons / Greeting */}
        <div>
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
        </div>

        {/* Dark Mode Toggle */}
        <span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          </label>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

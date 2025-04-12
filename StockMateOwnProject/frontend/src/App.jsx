import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouse";
import Inventory from "./pages/Inventory";
import Welcome from "./pages/Welcome"; // Import the Welcome page

function App() {
  const { shop } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div>
        <Routes>
          {/* Show Welcome page first */}
          <Route path="/" element={shop ? <Dashboard /> : <Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={shop ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/warehouses"
            element={shop ? <Warehouses /> : <Navigate to="/" />}
          />
          <Route
            path="/inventory"
            element={shop ? <Inventory /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

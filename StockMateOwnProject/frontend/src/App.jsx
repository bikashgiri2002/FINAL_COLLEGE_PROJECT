import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouse";
import Inventory from "./pages/Inventory";
import Welcome from "./pages/Welcome";
import ResetPasswordPage from "./pages/ResetPasswordPage"; // ✅ Import the ResetPasswordPage
import ForgotPassword from "./pages/ForgotPassword";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  const { shop } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div>
        <Routes>
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
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route
            path="/forgot-password"
            element={!shop ? <ForgotPassword /> : <Navigate to="/" />}
          />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

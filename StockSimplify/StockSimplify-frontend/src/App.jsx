import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Register />
      <Login />
    </>
  );
}

export default App;

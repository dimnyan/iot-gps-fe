import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [route, setRoute] = useState("login");

  const handleLoginClick = () => {
    setRoute("dashboard");
  };
  const handleLogout = () => {
    setRoute("login");
  };

  return (
    <>
      {route === "dashboard" ? (
        <Dashboard onLogoutCLick={handleLogout} />
      ) : (
        <Login onLoginClick={handleLoginClick} />
      )}
    </>
  );
};

export default App;

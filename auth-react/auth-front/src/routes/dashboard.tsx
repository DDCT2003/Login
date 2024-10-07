import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const auth = useAuth();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    auth.isAuthenticated=false,
    setLoggedOut(true); // Cambia el estado para redirigir
  };

  // Si el usuario ha cerrado sesión, redirige a la página de login
  if (loggedOut) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

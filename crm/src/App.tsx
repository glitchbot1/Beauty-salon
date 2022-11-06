import React, { useMemo } from "react";
import "./App.css";
import { Outlet, Link, Navigate} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ButtonAppBar from "./components/ButtonAppBar";
import FixedContainer from "./components/FixedContainer";

function App() {
  const { isAuth, logout } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App">
      {isAuth && (
        <header>
          <nav>
            <ul>
              <li><Link to="/orders">Записи</Link></li>
              <li><Link to="/employees">Сотрудники</Link></li>
            </ul>
          </nav>

          <button onClick={logout}>Logout</button>
        </header>
      )}

      <Outlet />
    </div>
  );
}

export default App;

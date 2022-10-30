import React, { useMemo } from "react";
import "./App.css";

import { EmployeeCard } from "./components/EmployeeCard";
import { AuthForm } from "./components/AuthForm";
import { useAuth } from "./context/AuthContext";
import ButtonAppBar from "./components/ButtonAppBar";
import FixedContainer from "./components/FixedContainer";
function App() {
  const { isAuth, login, logout } = useAuth();
  const employee = useMemo<any[]>(() => {
    return [
      {
        id: 1,
        photo:
          "https://i.pinimg.com/736x/f8/c8/1d/f8c81d920fb1d9756b766300c9bbc78e.jpg",
        name: "Анжела",
        position: "Маникюрщица",
      },
    ];
  }, []);
  return (
    <div>
  <ButtonAppBar/>
 < FixedContainer />
      {/* {isAuth && <button onClick={logout}>Logout</button>}

      {isAuth ? (
        employee.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))
      ) : (
        <AuthForm onLogin={login} />
      )} */}
    </div>
  );
}

export default App;

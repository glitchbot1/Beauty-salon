import { AuthForm  } from "./components/AuthForm"
import { useAuth } from "../../context/AuthContext";
export function LoginPage(){
    const {login} = useAuth();
    return(
        <div>
            <h1>Вход</h1>
            <AuthForm onLogin={login} />
        </div>
    )
}
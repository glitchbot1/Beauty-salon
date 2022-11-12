import { AuthForm  } from "./components/AuthForm"
import { useAuth } from "../../context/AuthContext";
import style from "./module/LoginPage.module.css"

export function LoginPage(){
    const {login} = useAuth();
    return(
        <div className={style.login_page}>
           
            <AuthForm  onLogin={login} />
        </div>
    )
}
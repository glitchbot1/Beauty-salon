import { createContext, ReactNode, useContext, useState } from "react";
import { AuthData } from "../common/interfaces/AuthData";
import {useNavigate} from 'react-router-dom'
import pubSub from "../services/PubSub";
import { AppBar } from "@material-ui/core";
import {AppApi, OrderApi } from "../api"
import TokenServices from "../services/TokenServices";
interface AuthContextValue {
    isAuth: boolean;
    login: (authData: AuthData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuth, setIsAuth] = useState<boolean>(TokenServices.isTokenValid());
    const navigate = useNavigate();

    const login = async (authData: AuthData) => {
        try {
            const response = await AppApi.login(authData);
    
            TokenServices.setToken(response.access_token);
            setIsAuth(true);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        TokenServices.removeToken();
        setIsAuth(false);
        navigate('/login');
    }

    pubSub.on('logout', logout);

    const context = { isAuth, login, logout };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
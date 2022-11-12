import { FormEventHandler, useState, useRef } from "react";
import { AuthData } from "../../../common/interfaces/AuthData";
import style from  "../module/AuthForm.module.css"

interface AuthFormProps {
    onLogin: (authData: AuthData) => void;
}

export function AuthForm(props: AuthFormProps) {
    const form = useRef<any>();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEventHandler<HTMLFormElement> | any): void => {
        event.preventDefault();
        props.onLogin({ userName, password });
        
        reset();
    };

    const reset = () => {
        setUserName('');
        setPassword('');
    };

    return (
        < >
            <form className={style.form} ref={form} onSubmit={handleSubmit}>
            <h1>Страница авторизации</h1>
                <label>
                    <div className={style.title_input}>Имя пользователя</div>
                    <input className={style.input} id="name" type="text" required value={userName} onChange={event => setUserName(event.target.value)} />
                </label>

                <label>
                    <div className={style.title_input}>Пароль</div>
                    <input className={style.input} id="name" type="password" required value={password} onChange={event => setPassword(event.target.value)} />
                </label>
                <p>
                <button className={style.auth_btn} type="submit">Авторизоваться</button>
                 </p>
              
            </form>
        </>
    )
}
import React, {FormEvent, useContext} from 'react';
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function onFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        localStorage.setItem('auth', String(true))
        setIsAuth(!isAuth);
    }

    return (
        <div>
           <h1>Страница для авториззации</h1>
            <form onSubmit={onFormSubmit}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
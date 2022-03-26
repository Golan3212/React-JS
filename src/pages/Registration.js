import { Button, TextField } from "@mui/material";
import { useState } from "react";
import firebase from '../services/firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom";


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password)
        } catch {
            setError(error.message);
        }
    }

    return (
        <div className="registration">
            <form className="form_reg" onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                <p>Введите логин и пароль</p>
                <div className="formInput">
                    <TextField

                        type='email'
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        placeholder={'Введите ваш Email'}
                    />
                </div>
                <div className="formInput">
                    <TextField
                        className="authorInput"
                        type='password'
                        name="password"
                        value={password}
                        onChange={handlePassword}
                        placeholder={'Введите ваш пароль'}
                    />
                </div>
                {error && <div>
                    <p> Что-то пошло не так =С</p>
                </div>}
                <Button variant="outlined" type="submit"> Регистрация</Button>
                <p>У вас уже есть аккаунт? <NavLink
                    to={'/login'}
                    style={isActive => ({
                        color: isActive ? "#4D96CB" : "blue"
                    })}
                >Авторизация
                </NavLink>
                </p>
            </form>
        </div>
    )
}

export default Registration;
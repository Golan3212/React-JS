import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";




const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';


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
            await auth.signin({email, password}, () => {
                navigate(from, {replace: true});
             })
        }catch (e){
            setError(e);
            console.error(e);
        }
      
    };

    return (
        <div className="registration">
            <form className="form_reg" onSubmit={handleSubmit}>
                <h1>Авторизация</h1>
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
               <Button variant="outlined" type="submit"> Войти в IT</Button>
               <p>У вас нет аккаунта? <NavLink to={'/registration'} 
               style={isActive => ({
                color: isActive ? "#4D96CB" : "blue"
              })}
               >Регистрация</NavLink></p>
            </form>
        </div>
    )
}

export default Login;
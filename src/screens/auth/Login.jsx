import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../redux/actions/authentication';
import { toast } from 'react-toastify';


function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    const onsubmit =  (e) => {
        e.preventDefault()
        console.log("Login data", login)
        try {
           dispatch(LOGIN(login, navigate));
        } catch (error) {
           toast.error("Login Component error!") 
        }
    }
    return (
        <div className="register-container">
            <h2>Login</h2>
            <form onSubmit={onsubmit}>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={login.email}
                        onChange={onChange}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={login.password}
                        onChange={onChange}
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Login
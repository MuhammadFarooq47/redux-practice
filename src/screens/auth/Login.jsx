import React, { useState } from 'react';
import './Register.css'; // Import your CSS file


function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="register-container">
            <h2>Login</h2>
            <form>

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
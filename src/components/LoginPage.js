import "../App.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };
    return (
        <div className="login">
            <h1>Login Here</h1>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <h2>Enter Email: <input type="text" placeholder="your name" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="10" /></h2>
            <h2>Enter Password: <input type="password" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength="10" /></h2>
            <button type="submit" ><Link to="/Dashboard">LOG IN</Link></button>
            </form>
        </div >
    )
}

export default LoginPage;

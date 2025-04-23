import './Signup.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import React from "react";
import { useNavigate } from "react-router-dom";
import VideoBackground from './VideoBackground';

import { emailValidator } from "./components/regexValidator";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = React.useState('')
    const [errorMessage1, setErrorMessage1] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!emailValidator(email)) {
            setErrorMessage1("Please enter a valid Email ID");
            return;
        }
        else
            setErrorMessage1("");
        axios
            .post("http://localhost:3001/login", { email, password })
            .then((response) => {
                const { data } = response;
                if (data === "Success") {
                    navigate("/home");
                    navigate("/home?email=" + email);

                } else {
                    setErrorMessage("Invalid email or password");
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="page">
            <div className='vid'>
                <div className="cont">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errorMessage1 && (
                            <div style={{ marginBottom: "10px", color: "red" }}>{errorMessage1}</div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                className="form-control rounded-0"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errorMessage.length > 0 && (
                            <div style={{ marginBottom: "10px", color: "red" }}>{errorMessage}</div>
                        )}
                        <button type="submit" className="sub">
                            Login
                        </button>
                    </form>
                    <p></p>
                    <Link to="/details" className="butt">
                        New user! join our community
                    </Link>
                </div>
                <div className="video">
                    <VideoBackground />
                </div>
            </div>
        </div>
    );


}
export default Login;
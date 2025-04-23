import "./Signup.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import React from "react";
import countrylist from "./country_list";
import VideoBackground from './VideoBackground';
import { useNavigate } from "react-router-dom";
import { emailValidator, passwordValidator, contactValidator } from "./components/regexValidator";

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [DialCode, setDialCode] = useState('');
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage1, setErrorMessage1] = useState("");
    const [errorMessage2, setErrorMessage2] = useState("");
    const [errorMessage3, setErrorMessage3] = useState("");


    const handleCountryChange = (e) => {
        const { value, selectedIndex } = e.target;
        setCountry(value);
        setDialCode(e.target.options[selectedIndex].getAttribute('data-dialcode'));
    };

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        {
            e.preventDefault();
            if (!emailValidator(email)) {
                setErrorMessage1("Please enter a valid Email ID");
                return;
            }
            else
                setErrorMessage1("");
            if (!contactValidator(contact)) {
                setErrorMessage2(
                    "invalid contact number! please check"
                );
                return;
            }
            else
                setErrorMessage2("");
            if (!passwordValidator(password)) {
                setErrorMessage3(
                    "Password should have a minimum of 8 characters with the combination of A-Z, a-z, 0-9, and special characters"
                );

                return;
            }
            else
                setErrorMessage3("");


            axios
                .post("http://localhost:3001/details", { name, email, country, contact, password })
                .then((result) => {
                    console.log(result);
                    navigate("/login");
                    

                    

                })
                .catch((err) => console.log(err));
        };
        return errorMessage1, errorMessage2, errorMessage3;
    }

    return (
        <div className="page">
            <div className="vid">
            
                <div className="cont">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="string"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />

                        </div>
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
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errorMessage1 && (
                            <div style={{ marginBottom: "10px", color: "red" }}>{errorMessage1}</div>
                        )}

                        <div className="mb-3">
                            <label htmlFor="country">
                                <strong>country</strong>
                            </label>

                            <select id="country"
                                value={country}
                                onChange={handleCountryChange}
                                className="form-control rounded-0"
                                required
                                onSelect={(e) => setCountry(e.target.value)}
                            >

                                <option value="">Select your country</option>
                                {countrylist.map((country, index) => (
                                    <option key={index} value={country.name} data-dialcode={country.dialCode}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="contact">
                                <strong>contact number:{DialCode}</strong>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your contact number"
                                autoComplete="off"
                                name="number"
                                className="form-control rounded-0"
                                required
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        {errorMessage2 && (
                            <div style={{ marginBottom: "10px", color: "red" }}>{errorMessage2}</div>
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
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>
                        {errorMessage3 && (
                            <div style={{ marginBottom: "10px", color: "red" }}>{errorMessage3}</div>
                        )}
                        <button type="submit" className="sub">
                            Register
                        </button>

                    </form>
                    <Link to="/login" className="butt">
                        Community member! please login
                    </Link>
                </div>
                <div className="video">
                    <VideoBackground />
                </div>
            </div>
        </div>
    );
}
export default Signup;
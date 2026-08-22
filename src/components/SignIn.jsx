import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import LoadingSpinner from "./LoadingSpinner";

import { login } from "../api/auth";

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState("");

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading("Signing in...");

        setError("");

        setSuccess("");

        try {

            const response = await login({

                email,

                password

            });

            const data = response.data;

            if (data.token) {

                localStorage.setItem(

                    "token",

                    data.token

                );

            }

            if (data.user) {

                localStorage.setItem(

                    "user",

                    JSON.stringify(data.user)

                );

            }

            window.dispatchEvent(

                new Event("userLoggedIn")

            );

            setLoading("");

            setSuccess("Login successful.");

            navigate("/");

        }

        catch (err) {

            setLoading("");

            setError(

                err.response?.data?.message ||

                "Login failed."

            );

        }

    };

    return (

        <div className="row justify-content-center mt-4">

            <div className="col-md-6 card shadow p-4">

                <h2 style={{ color: "#0F4C75", fontWeight: "700" }}>

                    Sign In

                </h2>

                {loading && (

                    <LoadingSpinner

                        message={loading}

                    />

                )}

                <h5 className="text-danger">

                    {error}

                </h5>

                <h5 className="text-success">

                    {success}

                </h5>

                <form onSubmit={handleSubmit}>

                    <input

                        className="form-control"

                        type="email"

                        placeholder="Email"

                        value={email}

                        onChange={(e) =>

                            setEmail(

                                e.target.value

                            )

                        }

                        required

                    />

                    <br />

                    <div style={{ position: "relative" }}>

                        <input

                            className="form-control"

                            type={

                                showPassword

                                    ? "text"

                                    : "password"

                            }

                            placeholder="Password"

                            value={password}

                            onChange={(e) =>

                                setPassword(

                                    e.target.value

                                )

                            }

                            required

                        />

                        <span

                            onClick={() =>

                                setShowPassword(

                                    !showPassword

                                )

                            }

                            style={{

                                position: "absolute",

                                right: "15px",

                                top: "12px",

                                cursor: "pointer"

                            }}

                        >

                            {showPassword

                                ? <FaEyeSlash />

                                : <FaEye />}

                        </span>

                    </div>

                    <br />

                    <button

                        className="btn btn-dark w-100"

                    >

                        Sign In

                    </button>

                    <br />

                    <br />

                    <Link to="/signup">

                        Don't have an account?

                        Sign Up

                    </Link>

                </form>

            </div>

        </div>

    );

};

export default SignIn;
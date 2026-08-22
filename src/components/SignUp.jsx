import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import LoadingSpinner from "./LoadingSpinner";

import { register } from "../api/auth";

const SignUp = () => {

    const navigate = useNavigate();

    const [username, updateUsername] = useState("");

    const [email, updateEmail] = useState("");

    const [phone, updatePhone] = useState("");

    const [password, updatePassword] = useState("");

    const [loading, setLoading] = useState("");

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [passwordStrength, setPasswordStrength] =
        useState("");

    const checkPasswordStrength = (value) => {

        let score = 0;

        if (value.length >= 8) score++;

        if (/[A-Z]/.test(value)) score++;

        if (/[a-z]/.test(value)) score++;

        if (/[0-9]/.test(value)) score++;

        if (/[@$!%*?&#]/.test(value)) score++;

        if (score <= 2) {

            setPasswordStrength("Weak");

        } else if (score <= 4) {

            setPasswordStrength("Medium");

        } else {

            setPasswordStrength("Strong");

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setSuccess("");

        setLoading(
            "Submitting Data! Please wait ...."
        );

        try {

            const response = await register({

                username,

                first_name: username,

                last_name: "",

                email,

                phone,

                password,

                role: "customer"

            });

            const data = response.data;

            if (data?.token) {

                localStorage.setItem(
                    "token",
                    data.token
                );

            }

            if (data?.user) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

            }

            setLoading("");

            setSuccess(
                data?.message ||
                "Account created successfully."
            );

            window.dispatchEvent(
                new Event("userLoggedIn")
            );

            setTimeout(() => {

                navigate("/signin");

            }, 1500);

        } catch (err) {

            setLoading("");

            setError(

                err.response?.data?.message ||
                err.message ||
                "Registration failed."

            );

        }

    };

    return (

        <div className="row justify-content-center mt-4">

            <div className="col-md-6 card shadow p-4">

                <h2
                    style={{
                        color: "#0F4C75",
                        fontWeight: "700"
                    }}
                >

                    Sign Up

                </h2>

                {loading && (

                    <LoadingSpinner
                        message={loading}
                    />

                )}

                <h5
                    style={{
                        color: "#DC3545"
                    }}
                >

                    {error}

                </h5>

                <h5
                    style={{
                        color: "#28A745"
                    }}
                >

                    {success}

                </h5>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        required
                        onChange={(e) =>
                            updateUsername(
                                e.target.value
                            )
                        }
                        value={username}
                    />

                    <br />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                        onChange={(e) =>
                            updateEmail(
                                e.target.value
                            )
                        }
                        value={email}
                    />

                    <br />

                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                        required
                        onChange={(e) =>
                            updatePhone(
                                e.target.value
                            )
                        }
                        value={phone}
                    />

                    <br />

                    <div
                        style={{
                            position: "relative"
                        }}
                        className="password-wrapper"
                    >

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => {

                                updatePassword(
                                    e.target.value
                                );

                                checkPasswordStrength(
                                    e.target.value
                                );

                            }}
                            value={password}
                            style={{
                                paddingRight: "40px"
                            }}
                        />

                        {password && (

                            <small
                                style={{
                                    color:
                                        passwordStrength ===
                                        "Weak"
                                            ? "#DC3545"
                                            : passwordStrength ===
                                              "Medium"
                                            ? "#FFC107"
                                            : "#28A745"
                                }}
                            >

                                Password strength:{" "}
                                {passwordStrength}

                            </small>

                        )}

                        <span
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            style={{
                                position: "absolute",
                                right: "12px",
                                top: "18px",
                                cursor: "pointer",
                                color: "#555",
                                zIndex: "10"
                            }}
                        >

                            {showPassword
                                ? <FaEyeSlash />
                                : <FaEye />}

                        </span>

                    </div>

                    <br />

                    <button
                        type="submit"
                        className="btn"
                        style={{
                            backgroundColor:
                                "#1B262C",
                            borderColor:
                                "#1B262C",
                            color:
                                "#FFFFFF"
                        }}
                        disabled={!!loading}
                    >

                        {loading
                            ? "Creating Account..."
                            : "Sign Up"}

                    </button>

                    <br />

                    <br />

                    <Link to="/signin">

                        Already have an account? Sign In

                    </Link>

                </form>

            </div>

        </div>

    );

};

export default SignUp;
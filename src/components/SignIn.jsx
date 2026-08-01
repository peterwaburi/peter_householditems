import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";

const SignIn = () => {

    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);

        setLoading("Please Wait...");
        setSuccess("");
        setError("");

        try {

            const user_data = new FormData();
            user_data.append("email", email);
            user_data.append("password", password);

            const response = await axios.post(
                "https://peter511.alwaysdata.net/api/signin",
                user_data
            );

            console.log(response);

            if (response.status === 200) {
                console.log("Full response data:", response.data);
                if (response.data.user) {
                    console.log("User object being stored:", response.data.user);
                    // ✅ STORE USER (important for TopBar greeting)
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );

                    setSuccess(response.data.message);
                    setLoading("");

                    // Notify other components (TopBar)
                    window.dispatchEvent(new Event("userLoggedIn"));

                    // redirect home
                    navigate("/");
                } else {
                    console.log("No user data in response");
                    setError("Login failed: No user data returned");
                    setLoading("");
                }
            } else {
                setError("Login failed: Invalid response");
                setLoading("");
            }

        } catch (error) {
            console.log(error);
            setError(error?.response?.data?.message || error.message);
            setLoading("");
        }
    };

    return (
        <div className="row justify-content-center mt-4">

            

            <div className="col-md-6 card shadow p-4">

                <h2 style={{ color: '#0F4C75', fontWeight: '700' }}>Sign In</h2>

                {loading && <LoadingSpinner message={loading} />}
                <h5 style={{ color: '#DC3545' }}>{error}</h5>
                <h5 style={{ color: '#28A745' }}>{success}</h5>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={(e) => updateEmail(e.target.value)}
                        value={email}
                    />
                    <br />

                    <div style={{ position: "relative" }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => updatePassword(e.target.value)}
                            value={password}
                            style={{ paddingRight: "40px" }}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "12px",
                                top: "18px",
                                cursor: "pointer",
                                color: "#555",
                                zIndex: "10"
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <br />

                    <button 
                        className="btn"
                        style={{ backgroundColor: '#1B262C', borderColor: '#1B262C', color: '#FFFFFF' }}
                    >
                        Sign In
                    </button>

                    <br /><br />

                    <Link to="/signup">
                        Dont have an account? Sign Up
                    </Link>

                </form>

            </div>
        </div>
    );
};

export default SignIn;
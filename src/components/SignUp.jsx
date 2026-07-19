import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";

const SignUp = () => {
    const navigate = useNavigate();
    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");

    const handleSubmit = async (e) => {
        // prevent default behaviour
        e.preventDefault();

        // notify user to wait
        setError("")
        setSuccess("")
        setLoading("Submitting Data! Please wait ....")

        // confirm user input
        console.log(username, email, phone, password);

        // try send data to sever
        try {
            // create form data
            const user_data = new FormData();
            user_data.append("username", username);
            user_data.append("email", email);
            user_data.append("phone", phone);
            user_data.append("password", password);

            // use axios tosend data to sever
            const response = await axios.post("https://peter511.alwaysdata.net/api/signup", user_data)
            console.log(response);
            if (response.status === 200) {
                setSuccess(response.data.message);
                setLoading("");
                
                // Store user data in localStorage after successful signup
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    // Dispatch event to notify other components
                    window.dispatchEvent(new Event("userLoggedIn"));
                }
                
                // Navigate to home page after 2 seconds delay
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }

        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading("");

            updateUsername("")
            updateEmail("")
            updatePhone("")
            updatePassword("")
        }
    }
    const checkPasswordStrength = (password) => {
        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[@$!%*?&#]/.test(password)) score++;

        if (score <= 2) {
            setPasswordStrength("Weak");
        } else if (score === 3 || score === 4) {
            setPasswordStrength("Medium");
        } else {
            setPasswordStrength("Strong");
        }
    };

    return (
        <div className="row justify-content-center mt-4">

            <div className="col-md-6 card shadow p-4">
                <h2 style={{ color: '#0F4C75', fontWeight: '700' }}>Sign Up</h2>
                {loading && <LoadingSpinner message={loading} />}
                <h5 style={{ color: '#DC3545' }}>{error}</h5>
                <h5 style={{ color: '#28A745' }}>{success}</h5>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter username"
                        required
                        onChange={(e) => { updateUsername(e.target.value) }}
                        value={username}
                    /><br />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter your email"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email} /><br />

                    <input
                        type="tel"
                        className="form-control"
                        placeholder="enter phone number"
                        required
                        onChange={(e) => { updatePhone(e.target.value) }}
                        value={phone} /><br />

                    <div style={{ position: "relative" }}
                        className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="enter your password"
                            required
                            onChange={(e) => {
                                updatePassword(e.target.value);
                                checkPasswordStrength(e.target.value);
                            }}
                            value={password}
                            style={{ paddingRight: "40px" }}
                        />
                        {password && (
                            <small
                                style={{
                                    color: passwordStrength === "Weak"
                                        ? "#DC3545"
                                        : passwordStrength === "Medium"
                                            ? "#FFC107"
                                            : "#28A745"
                                }}
                            >
                                Password strength: {passwordStrength}
                            </small>
                        )}
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
                        Sign Up
                    </button><br />

                    <Link to="/signin">Alredy have an account? Sign In</Link>


                </form>
            </div>



        </div>
    );
}

export default SignUp;
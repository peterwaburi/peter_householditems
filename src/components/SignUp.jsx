import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
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
                <h2>Sign Up</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

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

                    <div style={{ position: "constant" }}
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
                                className={
                                    passwordStrength === "Weak"
                                        ? "text-danger"
                                        : passwordStrength === "Medium"
                                            ? "text-warning"
                                            : "text-success"
                                }
                            >
                                Password strength: {passwordStrength}
                            </small>
                        )}
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#555"
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                    </div>
                    <br />
                    <button className="btn btn-dark">
                        Sign Up
                    </button><br />

                    <Link to="/signin">Alredy have an account? Sign In</Link>


                </form>
            </div>



        </div>
    );
}

export default SignUp;
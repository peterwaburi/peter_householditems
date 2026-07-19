import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import StatusMessages from "./StatusMessages";
import { API_ENDPOINTS } from "../config";
import { postFormData } from "../utils/api";

const SignIn = () => {

    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);

        setLoading("Please Wait...");
        setSuccess("");
        setError("");

        try {

            const response = await postFormData(API_ENDPOINTS.signin, {
                email,
                password,
            });

            console.log(response);

            if (response.status === 200 && response.data.user) {

                // ✅ STORE USER (important for TopBar greeting)
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                setSuccess(response.data.message);
                setLoading("");

                // OPTIONAL: notify other components (TopBar)
                window.dispatchEvent(new Event("storage"));

                // redirect home
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            setError(error?.response?.data?.message || error.message);
            setLoading("");
        }
    };

    return (
        <div className="row justify-content-center mt-4">

            <NavBar />

            <div className="col-md-6 card shadow p-4">

                <h2>Sign In</h2>

                <StatusMessages loading={loading} error={error} success={success} />

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={(e) => updateEmail(e.target.value)}
                        value={email}
                    />
                    <br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => updatePassword(e.target.value)}
                        value={password}
                    />
                    <br />

                    <button className="btn btn-dark">
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
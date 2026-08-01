import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import "../styles/topbar.css";

function TopBar() {

    // Temporary state
    // Later this will come from your authentication system.
    const isLoggedIn = false;

    const user = {
        firstName: "Peter",
        role: "Customer",
    };

    return (
        <div className="topbar">

            <div className="topbar-left">

                <span>
                    <FaMapMarkerAlt className="me-2" />
                    Nairobi, Kenya
                </span>

                <span className="ms-4">
                    🕒 Mon - Sat: 8:00 AM - 6:00 PM
                </span>

                <span className="ms-4">
                    <FaPhoneAlt className="me-2" />
                    +254 700 123 456
                </span>

            </div>

            <div className="topbar-right">

                {isLoggedIn ? (
                    <>
                        <span className="welcome-user">
                            <FaUserCircle className="me-2" />
                            Hello, {user.firstName}
                        </span>

                        <Link className="top-link ms-4" to="/customer/dashboard">
                            Dashboard
                        </Link>

                        <span className="divider">|</span>

                        <Link className="top-link" to="/logout">
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className="top-link" to="/signin">
                            Sign In
                        </Link>

                        <span className="divider">|</span>

                        <Link className="top-link" to="/signup">
                            Sign Up
                        </Link>
                    </>
                )}

            </div>

        </div>
    );
}

export default TopBar;
import { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopBar() {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    useEffect(() => {
        const handleStorageChange = () => {
            const userData = JSON.parse(localStorage.getItem("user"));
            console.log("User data from storage:", userData);
            setUser(userData);
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('userLoggedIn', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('userLoggedIn', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/";
    };

    return (
        <Navbar className="topbar">

            <Container className="d-flex justify-content-between align-items-center">

                {/* LEFT SIDE */}
                <div
                    className="welcome-section"
                    style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#F8F9FA",
                        fontFamily: "Segoe UI, sans-serif"
                    }}
                >

                    {
                        user ? (
                            <>
                                <span style={{ marginRight: "10px" }}>
                                    Hello, {user.user_name || user.username || user.name || user.email || "User"}
                                </span>

                                <span>
                                    Welcome to Blue Wave Car Wash & Autospa
                                </span>
                            </>
                        ) : (
                            <span>
                                Welcome to Blue Wave Car Wash & Autospa
                            </span>
                        )
                    }

                </div>

                {/* RIGHT SIDE */}
                <div className="auth-buttons d-flex gap-3">

                    {
                        !user ? (
                            <>
                                {/* GO TO LOGIN PAGE */}
                                <Link to="/signin" style={{ textDecoration: "none" }}>
                                    <Button className="login-btn">
                                        Login
                                    </Button>
                                </Link>

                                {/* GO TO SIGNUP PAGE */}
                                <Link to="/signup" style={{ textDecoration: "none" }}>
                                    <Button className="signup-btn">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        )
                    }

                </div>

            </Container>

        </Navbar>
    );
}

export default TopBar;
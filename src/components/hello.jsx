import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopBar() {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const handleLogout = () => {
        setUser(null);
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
                        color: "#f9fafb",
                        fontFamily: "Segoe UI, sans-serif"
                    }}
                >

                    {
                        user ? (
                            <>
                                <span style={{ marginRight: "10px" }}>
                                    Hello, {user.name}
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
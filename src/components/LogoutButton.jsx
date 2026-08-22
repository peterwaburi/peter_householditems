import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const LogoutButton = ({
    className = "btn btn-danger",
    children = "Logout"
}) => {

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/signin", {
            replace: true
        });
    };

    return (
        <button
            type="button"
            className={className}
            onClick={handleLogout}
        >
            {children}
        </button>
    );
};

export default LogoutButton;
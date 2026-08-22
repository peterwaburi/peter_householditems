import { Navigate, Outlet } from "react-router-dom";
import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const ProtectedRoute = ({ roles = [] }) => {

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />;
    }

    if (roles.length === 0) {
        return <Outlet />;
    }

    const role = getUserRole();

    const allowedRoles = roles.map(
        (item) => String(item).toLowerCase()
    );

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
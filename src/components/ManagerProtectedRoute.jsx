import { Navigate, Outlet } from "react-router-dom";
import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const ManagerProtectedRoute = () => {

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />;
    }

    const role = getUserRole();

    if (role !== "manager" && role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ManagerProtectedRoute;
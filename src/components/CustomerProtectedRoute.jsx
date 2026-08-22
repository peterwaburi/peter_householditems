import { Navigate, Outlet } from "react-router-dom";
import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const CustomerProtectedRoute = () => {

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />;
    }

    const role = getUserRole();

    if (role !== "customer" && role !== "user") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default CustomerProtectedRoute;
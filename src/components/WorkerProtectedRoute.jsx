import { Navigate, Outlet } from "react-router-dom";
import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const WorkerProtectedRoute = () => {

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />;
    }

    const role = getUserRole();

    if (role !== "worker") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default WorkerProtectedRoute;
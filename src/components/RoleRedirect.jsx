import { Navigate } from "react-router-dom";
import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const RoleRedirect = () => {

    if (!isAuthenticated()) {
        return (
            <Navigate
                to="/signin"
                replace
            />
        );
    }

    const role = getUserRole();

    if (
        role === "manager" ||
        role === "admin"
    ) {
        return (
            <Navigate
                to="/manager/dashboard"
                replace
            />
        );
    }

    if (role === "worker") {
        return (
            <Navigate
                to="/worker/dashboard"
                replace
            />
        );
    }

    if (
        role === "customer" ||
        role === "user"
    ) {
        return (
            <Navigate
                to="/customer/dashboard"
                replace
            />
        );
    }

    return (
        <Navigate
            to="/"
            replace
        />
    );
};

export default RoleRedirect;
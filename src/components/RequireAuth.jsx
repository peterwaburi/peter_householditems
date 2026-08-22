import { Navigate, Outlet, useLocation } from "react-router-dom";

import {
    isAuthenticated,
    getUserRole
} from "../utils/auth";

const RequireAuth = ({ roles = [] }) => {

    const location = useLocation();

    if (!isAuthenticated()) {

        return (
            <Navigate
                to="/signin"
                state={{
                    from: location.pathname
                }}
                replace
            />
        );

    }

    if (roles.length === 0) {

        return <Outlet />;

    }

    const currentRole =
        getUserRole();

    const allowedRoles =
        roles.map(
            (role) =>
                String(role).toLowerCase()
        );

    if (
        !allowedRoles.includes(
            currentRole
        )
    ) {

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }

    return <Outlet />;
};

export default RequireAuth;
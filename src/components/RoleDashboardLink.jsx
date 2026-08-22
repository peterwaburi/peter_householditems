import { Link } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import { getRoleRoute } from "../utils/roleRoutes";

const RoleDashboardLink = ({
    className = "btn btn-primary",
    children = "Dashboard"
}) => {

    const role = getUserRole();

    const route = getRoleRoute(role);

    return (
        <Link
            to={route}
            className={className}
        >
            {children}
        </Link>
    );
};

export default RoleDashboardLink;
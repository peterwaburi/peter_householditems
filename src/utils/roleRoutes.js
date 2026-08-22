export const ROLE_ROUTES = {
    customer: "/customer/dashboard",
    user: "/customer/dashboard",
    worker: "/worker/dashboard",
    manager: "/manager/dashboard",
    admin: "/manager/dashboard"
};

export const getRoleRoute = (role) => {

    const normalizedRole =
        String(role || "").toLowerCase();

    return (
        ROLE_ROUTES[normalizedRole] ||
        "/"
    );
};

export const isValidRole = (role) => {

    const normalizedRole =
        String(role || "").toLowerCase();

    return Boolean(
        ROLE_ROUTES[normalizedRole]
    );
};
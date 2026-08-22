export const redirectByRole = (role) => {

    const normalizedRole =
        String(role || "").toLowerCase();

    switch (normalizedRole) {

        case "manager":
        case "admin":
            return "/manager/dashboard";

        case "worker":
            return "/worker/dashboard";

        case "customer":
        case "user":
            return "/customer/dashboard";

        default:
            return "/";

    }
};
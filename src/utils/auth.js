export const saveAuthentication = (token, user) => {
    if (token) {
        localStorage.setItem("token", token);
    }

    if (user) {
        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );
    }

    window.dispatchEvent(
        new Event("userLoggedIn")
    );
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getUser = () => {
    const value = localStorage.getItem("user");

    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
};

export const isAuthenticated = () => {
    return Boolean(getToken());
};

export const getUserRole = () => {
    const user = getUser();

    return String(
        user?.role ||
        user?.user_role ||
        ""
    ).toLowerCase();
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(
        new Event("userLoggedOut")
    );
};

export const clearAuthentication = logout;
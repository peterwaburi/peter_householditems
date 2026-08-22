import api from "./api";

export const register = async (data) => {
    const response = await api.post("/auth/register", data);
    return response;
};

export const login = async (data) => {
    const response = await api.post("/auth/login", data);

    if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
    }

    if (response.data?.user) {
        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );
    }

    return response;
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");

    if (!user) {
        return null;
    }

    try {
        return JSON.parse(user);
    } catch {
        return null;
    }
};

export const isAuthenticated = () => {
    return Boolean(localStorage.getItem("token"));
};
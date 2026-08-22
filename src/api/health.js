import api from "./api";

export const checkHealth = () =>
    api.get("/health");
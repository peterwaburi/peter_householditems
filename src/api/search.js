import api from "./api";

export const search = (query) =>
    api.get(
        `/search?q=${encodeURIComponent(query)}`
    );
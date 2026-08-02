import api from "./api";

export const getWorkers = () => api.get("/workers");

export const addWorker = (data) =>
    api.post("/workers", data);

export const updateWorker = (id, data) =>
    api.put(`/workers/${id}`, data);

export const deleteWorker = (id) =>
    api.delete(`/workers/${id}`);
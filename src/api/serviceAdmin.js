import api from "./api";

export const getAllServices = () => {
    return api.get("/services");
};

export const getServiceById = (id) => {
    return api.get(`/services/${id}`);
};

export const createService = (data) => {
    return api.post("/services", data);
};

export const updateService = (id, data) => {
    return api.put(`/services/${id}`, data);
};

export const deleteService = (id) => {
    return api.delete(`/services/${id}`);
};
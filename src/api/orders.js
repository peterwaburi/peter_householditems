import api from "./api";

export const getOrders = () => {
    return api.get("/orders");
};

export const getOrder = (id) => {
    return api.get(`/orders/${id}`);
};

export const createOrder = (data) => {
    return api.post("/orders", data);
};

export const updateOrder = (id, data) => {
    return api.put(`/orders/${id}`, data);
};

export const deleteOrder = (id) => {
    return api.delete(`/orders/${id}`);
};
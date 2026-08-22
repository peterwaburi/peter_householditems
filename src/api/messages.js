import api from "./api";

export const getMessages = () =>
    api.get("/messages");

export const getMessage = (id) =>
    api.get(`/messages/${id}`);

export const sendMessage = (data) =>
    api.post("/messages", data);

export const deleteMessage = (id) =>
    api.delete(`/messages/${id}`);
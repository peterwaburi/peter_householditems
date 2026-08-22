import api from "./api";

export const getUsers = () =>
    api.get("/users");

export const getUser = (id) =>
    api.get(`/users/${id}`);

export const updateUser = (id, data) =>
    api.put(`/users/${id}`, data);

export const deleteUser = (id) =>
    api.delete(`/users/${id}`);

export const getBookings = () =>
    api.get("/bookings");

export const updateBooking = (id, data) =>
    api.put(`/bookings/${id}`, data);

export const deleteBooking = (id) =>
    api.delete(`/bookings/${id}`);

export const getOrders = () =>
    api.get("/orders");

export const updateOrder = (id, data) =>
    api.put(`/orders/${id}`, data);

export const deleteOrder = (id) =>
    api.delete(`/orders/${id}`);

export const getReviews = () =>
    api.get("/reviews");

export const deleteReview = (id) =>
    api.delete(`/reviews/${id}`);

export const getAnalytics = () =>
    api.get("/analytics/summary");

export const getStatistics = () =>
    api.get("/statistics");

export const getReports = () =>
    api.get("/reports/summary");
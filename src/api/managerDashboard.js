import api from "./api";

export const getManagerDashboard = () => {
    return api.get("/manager/dashboard");
};

export const getManagerUsers = () => {
    return api.get("/users");
};

export const getManagerBookings = () => {
    return api.get("/bookings");
};

export const getManagerOrders = () => {
    return api.get("/orders");
};

export const getManagerProducts = () => {
    return api.get("/products");
};

export const getManagerServices = () => {
    return api.get("/services");
};

export const getManagerReviews = () => {
    return api.get("/reviews");
};

export const getManagerAnalytics = () => {
    return api.get("/analytics/summary");
};

export const getManagerStatistics = () => {
    return api.get("/statistics");
};

export const getManagerReports = () => {
    return api.get("/reports/summary");
};
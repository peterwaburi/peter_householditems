import api from "./api";

export const getCustomerDashboard = () => {
    return api.get("/customer/dashboard");
};

export const getCustomerBookings = () => {
    return api.get("/bookings");
};

export const getCustomerOrders = () => {
    return api.get("/orders");
};

export const getCustomerVehicles = () => {
    return api.get("/vehicles");
};

export const getCustomerReviews = () => {
    return api.get("/reviews");
};

export const getCustomerNotifications = () => {
    return api.get("/notifications");
};

export const getCustomerMessages = () => {
    return api.get("/messages");
};
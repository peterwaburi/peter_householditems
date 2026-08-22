import api from "./api";

export const getCustomerDashboard = () =>
    api.get("/customer/dashboard");

export const getCustomerBookings = () =>
    api.get("/bookings");

export const getCustomerOrders = () =>
    api.get("/orders");

export const getCustomerVehicles = () =>
    api.get("/vehicles");

export const getCustomerReviews = () =>
    api.get("/reviews");
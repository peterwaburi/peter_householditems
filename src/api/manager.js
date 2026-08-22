import api from "./api";

export const getManagerDashboard = () =>
    api.get("/manager/dashboard");

export const getManagerAnalytics = () =>
    api.get("/analytics/summary");

export const getManagerStatistics = () =>
    api.get("/statistics");

export const getManagerReports = () =>
    api.get("/reports/summary");

export const getManagerUsers = () =>
    api.get("/users");

export const getManagerBookings = () =>
    api.get("/bookings");
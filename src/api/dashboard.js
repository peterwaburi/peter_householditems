import api from "./api";

export const getDashboardSummary = () =>
    api.get("/dashboard/summary");

export const getCustomerDashboard = () =>
    api.get("/customer/dashboard");

export const getManagerDashboard = () =>
    api.get("/manager/dashboard");

export const getWorkerDashboard = () =>
    api.get("/worker/dashboard");
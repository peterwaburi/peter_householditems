import api from "./api";

export const getReports = () =>
    api.get("/reports/summary");

export const getAnalytics = () =>
    api.get("/analytics/summary");

export const getStatistics = () =>
    api.get("/statistics");
import api from "./api";

export const getAnalytics = () => {
    return api.get("/analytics/summary");
};

export const getStatistics = () => {
    return api.get("/statistics");
};

export const getReports = () => {
    return api.get("/reports/summary");
};
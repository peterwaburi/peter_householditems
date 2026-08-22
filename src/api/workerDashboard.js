import api from "./api";

export const getWorkerDashboard = () => {
    return api.get("/worker/dashboard");
};

export const getWorkerBookings = () => {
    return api.get("/bookings");
};

export const getWorkerSchedules = () => {
    return api.get("/schedules");
};

export const getWorkerAttendance = () => {
    return api.get("/attendance");
};

export const getWorkerNotifications = () => {
    return api.get("/notifications");
};

export const getWorkerMessages = () => {
    return api.get("/messages");
};
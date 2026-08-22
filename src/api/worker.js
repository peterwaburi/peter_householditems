import api from "./api";

export const getWorkerDashboard = () =>
    api.get("/worker/dashboard");

export const getWorkerBookings = () =>
    api.get("/bookings");

export const getWorkerSchedules = () =>
    api.get("/schedules");

export const getWorkerAttendance = () =>
    api.get("/attendance");
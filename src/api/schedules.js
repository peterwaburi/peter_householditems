import api from "./api";

export const getSchedules = () => {
    return api.get("/schedules");
};

export const createSchedule = (data) => {
    return api.post("/schedules", data);
};

export const updateSchedule = (id, data) => {
    return api.put(`/schedules/${id}`, data);
};

export const deleteSchedule = (id) => {
    return api.delete(`/schedules/${id}`);
};
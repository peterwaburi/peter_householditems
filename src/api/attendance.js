import api from "./api";

export const getAttendance = () => {
    return api.get("/attendance");
};

export const createAttendance = (data) => {
    return api.post("/attendance", data);
};

export const updateAttendance = (id, data) => {
    return api.put(`/attendance/${id}`, data);
};

export const deleteAttendance = (id) => {
    return api.delete(`/attendance/${id}`);
};
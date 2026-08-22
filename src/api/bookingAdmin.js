import api from "./api";

export const getAllBookings = () => {
    return api.get("/bookings");
};

export const getBookingById = (id) => {
    return api.get(`/bookings/${id}`);
};

export const createBooking = (data) => {
    return api.post("/bookings", data);
};

export const updateBooking = (id, data) => {
    return api.put(`/bookings/${id}`, data);
};

export const cancelBooking = (id) => {
    return api.put(`/bookings/${id}`, {
        status: "Cancelled"
    });
};

export const completeBooking = (id) => {
    return api.put(`/bookings/${id}`, {
        status: "Completed"
    });
};

export const deleteBooking = (id) => {
    return api.delete(`/bookings/${id}`);
};
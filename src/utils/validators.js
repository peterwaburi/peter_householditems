export const emailValidator = (email) =>

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const phoneValidator = (phone) =>

    /^(\+254|0)[17]\d{8}$/.test(phone);

export const required = (value) =>

    value !== "";
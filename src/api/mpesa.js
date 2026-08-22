import api from "./api";

export const initiateStkPush = async ({
    phone,
    amount,
    reference,
    description
}) => {
    return api.post("/mpesa/stkpush", {
        phone,
        amount,
        reference,
        description
    });
};

export const getPayments = () => {
    return api.get("/payments");
};
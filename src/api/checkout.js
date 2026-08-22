import api from "./api";

export const createCheckoutOrder = (
    data
) => {

    return api.post(
        "/orders",
        data
    );
};

export const initiateCheckoutPayment = (
    data
) => {

    return api.post(
        "/mpesa/stkpush",
        data
    );
};

export const getCheckoutOrders = () => {

    return api.get(
        "/orders"
    );
};

export const getCheckoutPayments = () => {

    return api.get(
        "/payments"
    );
};
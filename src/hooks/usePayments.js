import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getPayments,
    createPayment,
    updatePayment
} from "../api/payments";

const usePayments = () => {

    const [payments, setPayments] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadPayments = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getPayments();

            const data =
                response.data?.data ??
                response.data?.payments ??
                response.data ??
                [];

            setPayments(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load payments."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const addPayment = useCallback(
        async (data) => {

            const response =
                await createPayment(data);

            await loadPayments();

            return response;

        },
        [loadPayments]
    );

    const editPayment = useCallback(
        async (id, data) => {

            const response =
                await updatePayment(
                    id,
                    data
                );

            await loadPayments();

            return response;

        },
        [loadPayments]
    );

    useEffect(() => {

        loadPayments();

    }, [loadPayments]);

    return {
        payments,
        loading,
        error,
        refresh: loadPayments,
        addPayment,
        editPayment
    };
};

export default usePayments;
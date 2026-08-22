import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
} from "../api/order";

const useOrders = () => {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadOrders = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getOrders();

            const data =
                response.data?.data ??
                response.data?.orders ??
                response.data ??
                [];

            setOrders(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load orders."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const addOrder = useCallback(
        async (data) => {

            const response =
                await createOrder(data);

            await loadOrders();

            return response;

        },
        [loadOrders]
    );

    const editOrder = useCallback(
        async (id, data) => {

            const response =
                await updateOrder(
                    id,
                    data
                );

            await loadOrders();

            return response;

        },
        [loadOrders]
    );

    const removeOrder = useCallback(
        async (id) => {

            const response =
                await deleteOrder(id);

            await loadOrders();

            return response;

        },
        [loadOrders]
    );

    useEffect(() => {

        loadOrders();

    }, [loadOrders]);

    return {
        orders,
        loading,
        error,
        refresh: loadOrders,
        addOrder,
        editOrder,
        removeOrder
    };
};

export default useOrders;
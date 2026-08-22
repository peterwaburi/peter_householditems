import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking
} from "../api/booking";

const useBookings = () => {

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadBookings = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response = await getBookings();

            const data =
                response.data?.data ??
                response.data?.bookings ??
                response.data ??
                [];

            setBookings(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load bookings."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const addBooking = useCallback(
        async (data) => {

            const response =
                await createBooking(data);

            await loadBookings();

            return response;

        },
        [loadBookings]
    );

    const editBooking = useCallback(
        async (id, data) => {

            const response =
                await updateBooking(
                    id,
                    data
                );

            await loadBookings();

            return response;

        },
        [loadBookings]
    );

    const removeBooking = useCallback(
        async (id) => {

            const response =
                await deleteBooking(id);

            await loadBookings();

            return response;

        },
        [loadBookings]
    );

    useEffect(() => {

        loadBookings();

    }, [loadBookings]);

    return {
        bookings,
        loading,
        error,
        refresh: loadBookings,
        addBooking,
        editBooking,
        removeBooking
    };
};

export default useBookings;
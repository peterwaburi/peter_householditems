import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getReviews,
    createReview,
    updateReview,
    deleteReview
} from "../api/review";

const useReviews = () => {

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadReviews = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getReviews();

            const data =
                response.data?.data ??
                response.data?.reviews ??
                response.data ??
                [];

            setReviews(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load reviews."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const addReview = useCallback(
        async (data) => {

            const response =
                await createReview(data);

            await loadReviews();

            return response;

        },
        [loadReviews]
    );

    const editReview = useCallback(
        async (id, data) => {

            const response =
                await updateReview(
                    id,
                    data
                );

            await loadReviews();

            return response;

        },
        [loadReviews]
    );

    const removeReview = useCallback(
        async (id) => {

            const response =
                await deleteReview(id);

            await loadReviews();

            return response;

        },
        [loadReviews]
    );

    useEffect(() => {

        loadReviews();

    }, [loadReviews]);

    return {
        reviews,
        loading,
        error,
        refresh: loadReviews,
        addReview,
        editReview,
        removeReview
    };
};

export default useReviews;
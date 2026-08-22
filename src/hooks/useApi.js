import {
    useCallback,
    useState
} from "react";

import { getApiError } from "../utils/apiError";

const useApi = (apiFunction) => {

    const [data, setData] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const execute = useCallback(
        async (...args) => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await apiFunction(...args);

                setData(response.data);

                return response;

            } catch (err) {

                setError(
                    getApiError(err)
                );

                throw err;

            } finally {

                setLoading(false);

            }

        },
        [apiFunction]
    );

    return {
        data,
        loading,
        error,
        execute
    };
};

export default useApi;
import { useCallback, useEffect, useState } from "react";

import { getDashboardSummary } from "../api/dashboard";

const useDashboardData = () => {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadDashboard = useCallback(
        async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getDashboardSummary();

                setData(
                    response.data?.data ??
                    response.data ??
                    null
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load dashboard."
                );

            } finally {

                setLoading(false);

            }

        },
        []
    );

    useEffect(() => {

        loadDashboard();

    }, [loadDashboard]);

    return {
        data,
        loading,
        error,
        refresh: loadDashboard
    };
};

export default useDashboardData;
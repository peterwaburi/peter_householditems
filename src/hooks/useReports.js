import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getReports,
    getAnalytics,
    getStatistics
} from "../api/report";

const useReports = () => {

    const [reports, setReports] =
        useState(null);

    const [analytics, setAnalytics] =
        useState(null);

    const [statistics, setStatistics] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadReports =
        useCallback(async () => {

            setLoading(true);
            setError("");

            try {

                const [
                    reportsResponse,
                    analyticsResponse,
                    statisticsResponse
                ] = await Promise.all([

                    getReports(),

                    getAnalytics(),

                    getStatistics()

                ]);

                setReports(
                    reportsResponse.data?.data ??
                    reportsResponse.data ??
                    null
                );

                setAnalytics(
                    analyticsResponse.data?.data ??
                    analyticsResponse.data ??
                    null
                );

                setStatistics(
                    statisticsResponse.data?.data ??
                    statisticsResponse.data ??
                    null
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load reports."
                );

            } finally {

                setLoading(false);

            }

        }, []);

    useEffect(() => {

        loadReports();

    }, [loadReports]);

    return {
        reports,
        analytics,
        statistics,
        loading,
        error,
        refresh: loadReports
    };
};

export default useReports;
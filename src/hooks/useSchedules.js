import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getSchedules,
    createSchedule,
    updateSchedule,
    deleteSchedule
} from "../api/schedule";

const useSchedules = () => {

    const [schedules, setSchedules] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadSchedules =
        useCallback(async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getSchedules();

                const data =
                    response.data?.data ??
                    response.data?.schedules ??
                    response.data ??
                    [];

                setSchedules(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load schedules."
                );

            } finally {

                setLoading(false);

            }

        }, []);

    const addSchedule =
        useCallback(
            async (data) => {

                const response =
                    await createSchedule(data);

                await loadSchedules();

                return response;

            },
            [loadSchedules]
        );

    const editSchedule =
        useCallback(
            async (id, data) => {

                const response =
                    await updateSchedule(
                        id,
                        data
                    );

                await loadSchedules();

                return response;

            },
            [loadSchedules]
        );

    const removeSchedule =
        useCallback(
            async (id) => {

                const response =
                    await deleteSchedule(id);

                await loadSchedules();

                return response;

            },
            [loadSchedules]
        );

    useEffect(() => {

        loadSchedules();

    }, [loadSchedules]);

    return {
        schedules,
        loading,
        error,
        refresh: loadSchedules,
        addSchedule,
        editSchedule,
        removeSchedule
    };
};

export default useSchedules;
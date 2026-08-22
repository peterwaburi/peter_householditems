import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getAttendance,
    createAttendance,
    updateAttendance,
    deleteAttendance
} from "../api/attendance";

const useAttendance = () => {

    const [attendance, setAttendance] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadAttendance =
        useCallback(async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getAttendance();

                const data =
                    response.data?.data ??
                    response.data?.attendance ??
                    response.data ??
                    [];

                setAttendance(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load attendance."
                );

            } finally {

                setLoading(false);

            }

        }, []);

    const addAttendance =
        useCallback(
            async (data) => {

                const response =
                    await createAttendance(data);

                await loadAttendance();

                return response;

            },
            [loadAttendance]
        );

    const editAttendance =
        useCallback(
            async (id, data) => {

                const response =
                    await updateAttendance(
                        id,
                        data
                    );

                await loadAttendance();

                return response;

            },
            [loadAttendance]
        );

    const removeAttendance =
        useCallback(
            async (id) => {

                const response =
                    await deleteAttendance(id);

                await loadAttendance();

                return response;

            },
            [loadAttendance]
        );

    useEffect(() => {

        loadAttendance();

    }, [loadAttendance]);

    return {
        attendance,
        loading,
        error,
        refresh: loadAttendance,
        addAttendance,
        editAttendance,
        removeAttendance
    };
};

export default useAttendance;
import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getNotifications,
    markNotificationRead,
    deleteNotification
} from "../api/notification";

const useNotifications = () => {

    const [notifications, setNotifications] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadNotifications =
        useCallback(
            async () => {

                setLoading(true);

                setError("");

                try {

                    const response =
                        await getNotifications();

                    const data =
                        response.data?.data ??
                        response.data?.notifications ??
                        response.data ??
                        [];

                    setNotifications(
                        Array.isArray(data)
                            ? data
                            : []
                    );

                } catch (err) {

                    setError(
                        err.response?.data?.message ||
                        err.message ||
                        "Unable to load notifications."
                    );

                } finally {

                    setLoading(false);

                }

            },
            []
        );

    const markAsRead =
        useCallback(
            async (id) => {

                await markNotificationRead(id);

                await loadNotifications();

            },
            [loadNotifications]
        );

    const remove =
        useCallback(
            async (id) => {

                await deleteNotification(id);

                await loadNotifications();

            },
            [loadNotifications]
        );

    useEffect(() => {

        loadNotifications();

    }, [loadNotifications]);

    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.is_read &&
                notification.read !== true
        ).length;

    return {
        notifications,
        unreadCount,
        loading,
        error,
        refresh: loadNotifications,
        markAsRead,
        remove
    };
};

export default useNotifications;
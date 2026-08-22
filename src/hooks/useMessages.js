import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getMessages,
    sendMessage,
    deleteMessage
} from "../api/message";

const useMessages = () => {

    const [messages, setMessages] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadMessages =
        useCallback(async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getMessages();

                const data =
                    response.data?.data ??
                    response.data?.messages ??
                    response.data ??
                    [];

                setMessages(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load messages."
                );

            } finally {

                setLoading(false);

            }

        }, []);

    const send =
        useCallback(
            async (data) => {

                const response =
                    await sendMessage(data);

                await loadMessages();

                return response;

            },
            [loadMessages]
        );

    const remove =
        useCallback(
            async (id) => {

                const response =
                    await deleteMessage(id);

                await loadMessages();

                return response;

            },
            [loadMessages]
        );

    useEffect(() => {

        loadMessages();

    }, [loadMessages]);

    return {
        messages,
        loading,
        error,
        refresh: loadMessages,
        send,
        remove
    };
};

export default useMessages;
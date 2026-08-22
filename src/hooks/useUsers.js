import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from "../api/users";

const useUsers = () => {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadUsers = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getUsers();

            const data =
                response.data?.data ??
                response.data?.users ??
                response.data ??
                [];

            setUsers(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load users."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const findUser = useCallback(
        async (id) => {

            return getUser(id);

        },
        []
    );

    const editUser = useCallback(
        async (id, data) => {

            const response =
                await updateUser(
                    id,
                    data
                );

            await loadUsers();

            return response;

        },
        [loadUsers]
    );

    const removeUser = useCallback(
        async (id) => {

            const response =
                await deleteUser(id);

            await loadUsers();

            return response;

        },
        [loadUsers]
    );

    useEffect(() => {

        loadUsers();

    }, [loadUsers]);

    return {
        users,
        loading,
        error,
        refresh: loadUsers,
        findUser,
        editUser,
        removeUser
    };
};

export default useUsers;
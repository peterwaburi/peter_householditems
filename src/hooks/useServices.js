import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getServices,
    createService,
    updateService,
    deleteService
} from "../api/service";

const useServices = () => {

    const [services, setServices] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadServices = useCallback(
        async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getServices();

                const data =
                    response.data?.data ??
                    response.data?.services ??
                    response.data ??
                    [];

                setServices(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load services."
                );

            } finally {

                setLoading(false);

            }

        },
        []
    );

    const addService = async (data) => {

        await createService(data);

        await loadServices();

    };

    const editService = async (
        id,
        data
    ) => {

        await updateService(
            id,
            data
        );

        await loadServices();

    };

    const removeService = async (id) => {

        await deleteService(id);

        await loadServices();

    };

    useEffect(() => {

        loadServices();

    }, [loadServices]);

    return {
        services,
        loading,
        error,
        refresh: loadServices,
        addService,
        editService,
        removeService
    };
};

export default useServices;
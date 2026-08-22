import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getVehicles,
    createVehicle,
    updateVehicle,
    deleteVehicle
} from "../api/vehicle";

const useVehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadVehicles = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getVehicles();

            const data =
                response.data?.data ??
                response.data?.vehicles ??
                response.data ??
                [];

            setVehicles(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load vehicles."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const addVehicle = useCallback(
        async (data) => {

            const response =
                await createVehicle(data);

            await loadVehicles();

            return response;

        },
        [loadVehicles]
    );

    const editVehicle = useCallback(
        async (id, data) => {

            const response =
                await updateVehicle(
                    id,
                    data
                );

            await loadVehicles();

            return response;

        },
        [loadVehicles]
    );

    const removeVehicle = useCallback(
        async (id) => {

            const response =
                await deleteVehicle(id);

            await loadVehicles();

            return response;

        },
        [loadVehicles]
    );

    useEffect(() => {

        loadVehicles();

    }, [loadVehicles]);

    return {
        vehicles,
        loading,
        error,
        refresh: loadVehicles,
        addVehicle,
        editVehicle,
        removeVehicle
    };
};

export default useVehicles;
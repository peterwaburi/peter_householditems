import {
    useCallback,
    useState
} from "react";

import {
    getCurrentLocation
} from "../api/location";

const useLocation = () => {

    const [location, setLocation] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const getLocation = useCallback(
        async () => {

            setLoading(true);
            setError("");

            try {

                const result =
                    await getCurrentLocation();

                setLocation(result);

                return result;

            } catch (err) {

                let message =
                    "Unable to get your location.";

                if (err.code === 1) {
                    message =
                        "Location permission was denied.";
                }

                if (err.code === 2) {
                    message =
                        "Your location could not be determined.";
                }

                if (err.code === 3) {
                    message =
                        "Location request timed out.";
                }

                setError(message);

                throw err;

            } finally {

                setLoading(false);

            }

        },
        []
    );

    return {
        location,
        loading,
        error,
        getLocation
    };
};

export default useLocation;
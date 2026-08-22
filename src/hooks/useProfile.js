import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getProfile,
    updateProfile,
    changePassword
} from "../api/profile";

const useProfile = () => {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadProfile = useCallback(async () => {

        setLoading(true);
        setError("");

        try {

            const response =
                await getProfile();

            setProfile(
                response.data?.data ??
                response.data?.user ??
                response.data ??
                null
            );

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load profile."
            );

        } finally {

            setLoading(false);

        }

    }, []);

    const saveProfile = useCallback(
        async (data) => {

            const response =
                await updateProfile(data);

            setProfile(
                response.data?.data ??
                response.data?.user ??
                response.data ??
                null
            );

            return response;

        },
        []
    );

    const updatePassword = useCallback(
        async (data) => {

            return changePassword(data);

        },
        []
    );

    useEffect(() => {

        loadProfile();

    }, [loadProfile]);

    return {
        profile,
        loading,
        error,
        refresh: loadProfile,
        saveProfile,
        updatePassword
    };
};

export default useProfile;
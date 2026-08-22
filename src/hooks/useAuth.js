import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getUser,
    getToken,
    isAuthenticated,
    logout
} from "../utils/auth";

const useAuth = () => {

    const [user, setUser] = useState(
        getUser()
    );

    const [token, setToken] = useState(
        getToken()
    );

    const [authenticated, setAuthenticated] =
        useState(
            isAuthenticated()
        );

    const refreshAuth = useCallback(() => {

        setUser(getUser());

        setToken(getToken());

        setAuthenticated(
            isAuthenticated()
        );

    }, []);

    useEffect(() => {

        window.addEventListener(
            "userLoggedIn",
            refreshAuth
        );

        window.addEventListener(
            "userLoggedOut",
            refreshAuth
        );

        return () => {

            window.removeEventListener(
                "userLoggedIn",
                refreshAuth
            );

            window.removeEventListener(
                "userLoggedOut",
                refreshAuth
            );

        };

    }, [refreshAuth]);

    const signOut = useCallback(() => {

        logout();

        setUser(null);

        setToken(null);

        setAuthenticated(false);

    }, []);

    return {
        user,
        token,
        authenticated,
        isAuthenticated: authenticated,
        refreshAuth,
        logout: signOut
    };
};

export default useAuth;
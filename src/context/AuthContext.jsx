import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    getUser,
    isLoggedIn,
    logout as clearAuthentication
} from "../utils/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        getUser()
    );

    const [authenticated, setAuthenticated] =
        useState(
            isAuthenticated()
        );

    useEffect(() => {

        const handleLogin = () => {

            setUser(getUser());

            setAuthenticated(
                isAuthenticated()
            );

        };

        const handleLogout = () => {

            setUser(null);

            setAuthenticated(false);

        };

        window.addEventListener(
            "userLoggedIn",
            handleLogin
        );

        window.addEventListener(
            "userLoggedOut",
            handleLogout
        );

        return () => {

            window.removeEventListener(
                "userLoggedIn",
                handleLogin
            );

            window.removeEventListener(
                "userLoggedOut",
                handleLogout
            );

        };

    }, []);

    const logout = () => {

        clearAuthentication();

        setUser(null);

        setAuthenticated(false);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                authenticated,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};

export default AuthContext;
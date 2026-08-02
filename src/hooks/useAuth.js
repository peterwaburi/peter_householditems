import { useState } from "react";

export default function useAuth() {

    const [user, setUser] = useState(null);

    const login = (data) => {

        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);

    };

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);

    };

    return {

        user,
        login,
        logout

    };

}
import { useEffect, useState } from "react";
import { checkHealth } from "../api/health";

const BackendStatus = () => {

    const [status, setStatus] =
        useState("checking");

    useEffect(() => {

        let active = true;

        const check = async () => {

            try {

                const response =
                    await checkHealth();

                if (active) {

                    setStatus(
                        response.status >= 200 &&
                        response.status < 300
                            ? "online"
                            : "offline"
                    );

                }

            } catch {

                if (active) {
                    setStatus("offline");
                }

            }

        };

        check();

        return () => {
            active = false;
        };

    }, []);

    if (status === "checking") {

        return (
            <span className="badge bg-warning text-dark">
                Checking backend...
            </span>
        );

    }

    if (status === "online") {

        return (
            <span className="badge bg-success">
                Backend Online
            </span>
        );

    }

    return (
        <span className="badge bg-danger">
            Backend Offline
        </span>
    );
};

export default BackendStatus;
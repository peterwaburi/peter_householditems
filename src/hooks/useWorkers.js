import { useEffect, useState } from "react";
import { getWorkers } from "../services/workerService";

export default function useWorkers() {

    const [workers, setWorkers] = useState([]);

    useEffect(() => {

        load();

    }, []);

    async function load() {

        const response = await getWorkers();

        setWorkers(response.data);

    }

    return {

        workers,
        reload: load

    };

}
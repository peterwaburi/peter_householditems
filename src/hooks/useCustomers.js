import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

export default function useCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        load();

    }, []);

    async function load() {

        const response = await getCustomers();

        setCustomers(response.data);

    }

    return {

        customers,
        reload: load

    };

}
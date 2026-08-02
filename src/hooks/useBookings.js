import { useEffect, useState } from "react";
import { getBookings } from "../services/bookingService";

export default function useBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        load();

    }, []);

    async function load() {

        const response = await getBookings();

        setBookings(response.data);

    }

    return {

        bookings,
        reload: load

    };

}
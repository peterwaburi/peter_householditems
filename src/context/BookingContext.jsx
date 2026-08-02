import { createContext, useState } from "react";

export const BookingContext = createContext();

function BookingProvider({ children }) {

    const [bookings, setBookings] = useState([]);

    return (

        <BookingContext.Provider

            value={{

                bookings,
                setBookings

            }}

        >

            {children}

        </BookingContext.Provider>

    );

}

export default BookingProvider;
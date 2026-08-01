import { Card } from "react-bootstrap";

function BookingSummary({

    vehicle,
    service,
    date,
    time,
    location

}) {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Booking Summary
                </h4>

                <p><strong>Vehicle:</strong> {vehicle}</p>

                <p><strong>Service:</strong> {service}</p>

                <p><strong>Date:</strong> {date}</p>

                <p><strong>Time:</strong> {time}</p>

                <p><strong>Location:</strong> {location}</p>

            </Card.Body>

        </Card>

    );

}

export default BookingSummary;
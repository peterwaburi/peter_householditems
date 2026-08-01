import { Card, Table, Button } from "react-bootstrap";

function BookingReceipt() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h3 className="mb-4">
                    Receipt
                </h3>

                <Table>

                    <tbody>

                        <tr>
                            <td>Booking ID</td>
                            <td>BW-000123</td>
                        </tr>

                        <tr>
                            <td>Customer</td>
                            <td>Peter Waburi</td>
                        </tr>

                        <tr>
                            <td>Service</td>
                            <td>Premium Wash</td>
                        </tr>

                        <tr>
                            <td>Total</td>
                            <td>KES 1,500</td>
                        </tr>

                    </tbody>

                </Table>

                <Button className="w-100">
                    Download Receipt
                </Button>

            </Card.Body>

        </Card>

    );

}

export default BookingReceipt;
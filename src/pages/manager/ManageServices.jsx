import { Container, Table, Button } from "react-bootstrap";

function ManageServices() {

    return (

        <Container className="py-5">

            <div className="d-flex justify-content-between mb-4">

                <h2 className="fw-bold text-primary">
                    Services
                </h2>

                <Button>Add Service</Button>

            </div>

            <Table bordered hover>

                <thead>

                    <tr>

                        <th>Service</th>
                        <th>Price</th>
                        <th>Duration</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Exterior Wash</td>
                        <td>KES 500</td>
                        <td>30 mins</td>

                    </tr>

                    <tr>

                        <td>Interior Cleaning</td>
                        <td>KES 1000</td>
                        <td>1 Hour</td>

                    </tr>

                    <tr>

                        <td>Full Detailing</td>
                        <td>KES 3500</td>
                        <td>4 Hours</td>

                    </tr>

                </tbody>

            </Table>

        </Container>

    );

}

export default ManageServices;
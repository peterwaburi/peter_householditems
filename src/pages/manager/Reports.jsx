import { Container, Table } from "react-bootstrap";

function Reports(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Reports
            </h2>

            <Table bordered hover responsive>

                <thead>

                    <tr>

                        <th>Month</th>
                        <th>Bookings</th>
                        <th>Revenue</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>January</td>
                        <td>280</td>
                        <td>KES 640,000</td>
                    </tr>

                    <tr>
                        <td>February</td>
                        <td>310</td>
                        <td>KES 715,000</td>
                    </tr>

                    <tr>
                        <td>March</td>
                        <td>355</td>
                        <td>KES 810,000</td>
                    </tr>

                </tbody>

            </Table>

        </Container>

    );

}

export default Reports;
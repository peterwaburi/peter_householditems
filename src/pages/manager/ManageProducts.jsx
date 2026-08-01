import { Container, Table, Button } from "react-bootstrap";

function ManageProducts() {

    return (

        <Container className="py-5">

            <div className="d-flex justify-content-between mb-4">

                <h2 className="fw-bold text-primary">
                    Products
                </h2>

                <Button>Add Product</Button>

            </div>

            <Table bordered hover responsive>

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Car Shampoo</td>
                        <td>Chemicals</td>
                        <td>KES 950</td>
                        <td>30</td>

                    </tr>

                    <tr>

                        <td>Tyre Shine</td>
                        <td>Tyres</td>
                        <td>KES 800</td>
                        <td>18</td>

                    </tr>

                </tbody>

            </Table>

        </Container>

    );

}

export default ManageProducts;
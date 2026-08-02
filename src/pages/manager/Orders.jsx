import { Container } from "react-bootstrap";
import OrdersTable from "../../components/OrdersTable";

function Orders() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Orders
            </h2>

            <OrdersTable />

        </Container>

    );

}

export default Orders;
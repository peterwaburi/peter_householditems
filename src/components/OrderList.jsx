import {
    Row,
    Col,
    Alert
} from "react-bootstrap";

import useOrders from "../hooks/useOrders";

import OrderCard from "./OrderCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

const OrderList = () => {

    const {
        orders,
        loading,
        error
    } = useOrders();

    if (loading) {
        return (
            <PageLoader
                message="Loading orders..."
            />
        );
    }

    if (error) {
        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );
    }

    if (orders.length === 0) {
        return (
            <EmptyState
                title="No orders"
                message="You have not placed any orders yet."
            />
        );
    }

    return (
        <Row className="g-4">

            {orders.map((order, index) => (

                <Col
                    key={
                        order.id ??
                        order.order_id ??
                        index
                    }
                    md={6}
                    lg={4}
                >

                    <OrderCard
                        order={order}
                    />

                </Col>

            ))}

        </Row>
    );
};

export default OrderList;
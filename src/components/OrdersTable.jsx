import { Card, Table, Badge } from "react-bootstrap";

function OrdersTable() {

    const orders = [

        {
            id:"ORD001",
            customer:"Peter",
            total:"KES 2,300",
            status:"Delivered"
        },

        {
            id:"ORD002",
            customer:"Jane",
            total:"KES 800",
            status:"Pending"
        },

        {
            id:"ORD003",
            customer:"Brian",
            total:"KES 1,400",
            status:"Processing"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Order</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders.map((order,index)=>(

                            <tr key={index}>

                                <td>{order.id}</td>

                                <td>{order.customer}</td>

                                <td>{order.total}</td>

                                <td>

                                    <Badge bg="primary">
                                        {order.status}
                                    </Badge>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default OrdersTable;
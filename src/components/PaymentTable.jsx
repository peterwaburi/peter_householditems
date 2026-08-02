import { Card, Table, Badge } from "react-bootstrap";

function PaymentTable() {

    const payments = [

        {
            id:"PAY001",
            customer:"Peter Waburi",
            amount:"KES 3,500",
            method:"M-Pesa",
            status:"Paid"
        },

        {
            id:"PAY002",
            customer:"Jane Wanjiru",
            amount:"KES 1,500",
            method:"Cash",
            status:"Pending"
        },

        {
            id:"PAY003",
            customer:"Brian Otieno",
            amount:"KES 5,000",
            method:"Card",
            status:"Paid"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Payments</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {payments.map((payment,index)=>(

                            <tr key={index}>

                                <td>{payment.id}</td>

                                <td>{payment.customer}</td>

                                <td>{payment.amount}</td>

                                <td>{payment.method}</td>

                                <td>

                                    <Badge bg={payment.status==="Paid"?"success":"warning"}>
                                        {payment.status}
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

export default PaymentTable;
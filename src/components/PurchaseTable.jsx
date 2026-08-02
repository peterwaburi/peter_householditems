import { Card, Table } from "react-bootstrap";

function PurchaseTable() {

    const purchases = [

        {
            item:"Car Shampoo",
            quantity:20,
            amount:"KES 18,000"
        },

        {
            item:"Tyre Shine",
            quantity:15,
            amount:"KES 12,000"
        },

        {
            item:"Microfiber Towels",
            quantity:50,
            amount:"KES 9,500"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Purchases</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>

                        </tr>

                    </thead>

                    <tbody>

                        {purchases.map((purchase,index)=>(

                            <tr key={index}>

                                <td>{purchase.item}</td>

                                <td>{purchase.quantity}</td>

                                <td>{purchase.amount}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default PurchaseTable;
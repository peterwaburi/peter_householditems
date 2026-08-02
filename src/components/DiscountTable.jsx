import { Card, Table, Badge, Button } from "react-bootstrap";

function DiscountTable() {

    const discounts = [

        {
            code: "WELCOME10",
            discount: "10%",
            expiry: "31 Dec 2026",
            status: "Active"
        },

        {
            code: "VIP20",
            discount: "20%",
            expiry: "30 Nov 2026",
            status: "Active"
        },

        {
            code: "WASH50",
            discount: "50%",
            expiry: "01 Aug 2026",
            status: "Expired"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <div className="d-flex justify-content-between mb-4">

                    <h4>Discount Codes</h4>

                    <Button>Add Discount</Button>

                </div>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Code</th>
                            <th>Discount</th>
                            <th>Expiry</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {discounts.map((item,index)=>(

                            <tr key={index}>

                                <td>{item.code}</td>

                                <td>{item.discount}</td>

                                <td>{item.expiry}</td>

                                <td>

                                    <Badge
                                        bg={item.status==="Active" ? "success":"danger"}
                                    >
                                        {item.status}
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

export default DiscountTable;
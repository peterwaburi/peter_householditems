import { Card, Table, Badge } from "react-bootstrap";

function InventoryTable() {

    const inventory = [

        {
            item: "Car Shampoo",
            stock: 35,
            status: "In Stock"
        },

        {
            item: "Tyre Shine",
            stock: 12,
            status: "Low Stock"
        },

        {
            item: "Dashboard Polish",
            stock: 40,
            status: "In Stock"
        },

        {
            item: "Microfiber Towels",
            stock: 8,
            status: "Low Stock"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Inventory
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Item</th>
                            <th>Stock</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {inventory.map((item,index)=>(

                            <tr key={index}>

                                <td>{item.item}</td>

                                <td>{item.stock}</td>

                                <td>

                                    <Badge
                                        bg={item.status==="In Stock" ? "success" : "warning"}
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

export default InventoryTable;
import { Card, Table, Badge } from "react-bootstrap";

function SupplierTable() {

    const suppliers = [

        {
            name:"AutoChem Ltd",
            product:"Car Shampoo",
            phone:"0712345678",
            status:"Active"
        },

        {
            name:"TyrePro Kenya",
            product:"Tyre Shine",
            phone:"0723456789",
            status:"Active"
        },

        {
            name:"CleanTech",
            product:"Cleaning Equipment",
            phone:"0734567890",
            status:"Pending"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Suppliers</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Product</th>
                            <th>Phone</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {suppliers.map((supplier,index)=>(

                            <tr key={index}>

                                <td>{supplier.name}</td>

                                <td>{supplier.product}</td>

                                <td>{supplier.phone}</td>

                                <td>

                                    <Badge
                                        bg={supplier.status==="Active"?"success":"warning"}
                                    >
                                        {supplier.status}
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

export default SupplierTable;
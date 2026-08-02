import { Card, Table, Button } from "react-bootstrap";

function ProductsTable() {

    const products = [

        {
            name:"Tyre Shine",
            stock:20,
            price:"KES 800"
        },

        {
            name:"Dashboard Polish",
            stock:15,
            price:"KES 700"
        },

        {
            name:"Car Shampoo",
            stock:35,
            price:"KES 1,200"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Product</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.map((product,index)=>(

                            <tr key={index}>

                                <td>{product.name}</td>

                                <td>{product.stock}</td>

                                <td>{product.price}</td>

                                <td>

                                    <Button size="sm">
                                        Edit
                                    </Button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default ProductsTable;
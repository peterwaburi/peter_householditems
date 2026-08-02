import { Card, Table, Badge } from "react-bootstrap";

function ExpenseTable() {

    const expenses = [

        {
            item: "Car Shampoo",
            category: "Supplies",
            amount: "KES 18,000",
            status: "Paid"
        },

        {
            item: "Electricity",
            category: "Utilities",
            amount: "KES 35,000",
            status: "Pending"
        },

        {
            item: "Water Bill",
            category: "Utilities",
            amount: "KES 12,500",
            status: "Paid"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Expenses</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Item</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {expenses.map((expense,index)=>(

                            <tr key={index}>

                                <td>{expense.item}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>

                                <td>

                                    <Badge bg={expense.status==="Paid"?"success":"warning"}>
                                        {expense.status}
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

export default ExpenseTable;
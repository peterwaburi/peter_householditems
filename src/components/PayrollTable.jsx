import { Card, Table } from "react-bootstrap";

function PayrollTable(){

    const payroll=[

        {
            employee:"John Kamau",
            role:"Detailer",
            salary:"KES 42,000"
        },

        {
            employee:"Mercy Wanjiku",
            role:"Supervisor",
            salary:"KES 58,000"
        },

        {
            employee:"Kevin Maina",
            role:"Cleaner",
            salary:"KES 36,000"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Payroll</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Employee</th>
                            <th>Role</th>
                            <th>Salary</th>

                        </tr>

                    </thead>

                    <tbody>

                        {payroll.map((employee,index)=>(

                            <tr key={index}>

                                <td>{employee.employee}</td>
                                <td>{employee.role}</td>
                                <td>{employee.salary}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default PayrollTable;
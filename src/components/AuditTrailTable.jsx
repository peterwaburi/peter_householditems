import { Card, Table } from "react-bootstrap";

function AuditTrailTable() {

    const logs = [

        {
            date:"01 Aug 2026",
            user:"Admin",
            action:"Added Worker"
        },

        {
            date:"01 Aug 2026",
            user:"Manager",
            action:"Updated Product"
        },

        {
            date:"31 Jul 2026",
            user:"Worker",
            action:"Completed Booking"
        },

        {
            date:"31 Jul 2026",
            user:"Customer",
            action:"Booked Service"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Audit Trail
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>User</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {logs.map((log,index)=>(

                            <tr key={index}>

                                <td>{log.date}</td>

                                <td>{log.user}</td>

                                <td>{log.action}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default AuditTrailTable;
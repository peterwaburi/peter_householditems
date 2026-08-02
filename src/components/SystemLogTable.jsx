import { Card, Table, Badge } from "react-bootstrap";

function SystemLogTable() {

    const logs = [

        {
            date:"01 Aug 2026",
            user:"Admin",
            action:"Added New Product",
            status:"Success"
        },

        {
            date:"01 Aug 2026",
            user:"Manager",
            action:"Deleted Booking",
            status:"Success"
        },

        {
            date:"31 Jul 2026",
            user:"Worker",
            action:"Login Failed",
            status:"Warning"
        },

        {
            date:"31 Jul 2026",
            user:"System",
            action:"Automatic Backup",
            status:"Completed"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    System Logs
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>User</th>
                            <th>Action</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {logs.map((log,index)=>(

                            <tr key={index}>

                                <td>{log.date}</td>

                                <td>{log.user}</td>

                                <td>{log.action}</td>

                                <td>

                                    <Badge
                                        bg={
                                            log.status==="Success" ||
                                            log.status==="Completed"
                                            ? "success"
                                            : "warning"
                                        }
                                    >
                                        {log.status}
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

export default SystemLogTable;
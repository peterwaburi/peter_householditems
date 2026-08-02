import { Card, Table, Badge } from "react-bootstrap";

function StaffScheduleTable() {

    const staff = [

        {
            name: "John Kamau",
            shift: "08:00 AM - 05:00 PM",
            role: "Detailer",
            status: "Present"
        },

        {
            name: "Mercy Wanjiku",
            shift: "09:00 AM - 06:00 PM",
            role: "Supervisor",
            status: "Present"
        },

        {
            name: "Kevin Maina",
            shift: "08:00 AM - 05:00 PM",
            role: "Cleaner",
            status: "Off"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Staff Schedule
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Role</th>
                            <th>Shift</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {staff.map((employee,index)=>(

                            <tr key={index}>

                                <td>{employee.name}</td>

                                <td>{employee.role}</td>

                                <td>{employee.shift}</td>

                                <td>

                                    <Badge bg="success">
                                        {employee.status}
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

export default StaffScheduleTable;
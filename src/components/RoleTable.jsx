import { Card, Table, Form } from "react-bootstrap";

function RoleTable() {

    const roles = [

        {
            role: "Manager",
            users: 2,
            access: true
        },

        {
            role: "Worker",
            users: 15,
            access: true
        },

        {
            role: "Customer",
            users: 324,
            access: true
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Roles & Permissions
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Role</th>
                            <th>Users</th>
                            <th>Access</th>

                        </tr>

                    </thead>

                    <tbody>

                        {roles.map((role,index)=>(

                            <tr key={index}>

                                <td>{role.role}</td>

                                <td>{role.users}</td>

                                <td>

                                    <Form.Check
                                        type="switch"
                                        defaultChecked={role.access}
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default RoleTable;
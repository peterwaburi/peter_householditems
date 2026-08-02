import { Card, Table, Badge } from "react-bootstrap";

function MembershipTable(){

    const members=[

        {
            customer:"Peter Waburi",
            plan:"Gold",
            expiry:"31 Dec 2026",
            status:"Active"
        },

        {
            customer:"Jane Wanjiru",
            plan:"Silver",
            expiry:"15 Nov 2026",
            status:"Active"
        },

        {
            customer:"Brian Otieno",
            plan:"Bronze",
            expiry:"05 Aug 2026",
            status:"Expiring"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Memberships</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Customer</th>
                            <th>Plan</th>
                            <th>Expiry</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {members.map((member,index)=>(

                            <tr key={index}>

                                <td>{member.customer}</td>
                                <td>{member.plan}</td>
                                <td>{member.expiry}</td>

                                <td>

                                    <Badge bg={member.status==="Active"?"success":"warning"}>
                                        {member.status}
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

export default MembershipTable;
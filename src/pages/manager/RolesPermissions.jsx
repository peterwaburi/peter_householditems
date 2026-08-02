import { Container } from "react-bootstrap";
import RoleTable from "../../components/RoleTable";

function RolesPermissions() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Roles & Permissions
            </h2>

            <RoleTable/>

        </Container>

    );

}

export default RolesPermissions;
import { Container } from "react-bootstrap";
import MembershipTable from "../../components/MembershipTable";

function Memberships(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Memberships
            </h2>

            <MembershipTable/>

        </Container>

    );

}

export default Memberships;
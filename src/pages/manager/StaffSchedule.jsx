import { Container } from "react-bootstrap";
import StaffScheduleTable from "../../components/StaffScheduleTable";

function StaffSchedule() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Staff Schedule
            </h2>

            <StaffScheduleTable/>

        </Container>

    );

}

export default StaffSchedule;
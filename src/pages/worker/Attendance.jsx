import { Container } from "react-bootstrap";
import AttendanceCard from "../../components/AttendanceCard";

function Attendance() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Attendance
            </h2>

            <AttendanceCard/>

        </Container>

    );

}

export default Attendance;
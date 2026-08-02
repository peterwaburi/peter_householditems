import { Container } from "react-bootstrap";
import PayrollTable from "../../components/PayrollTable";

function Payroll(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Payroll
            </h2>

            <PayrollTable/>

        </Container>

    );

}

export default Payroll;
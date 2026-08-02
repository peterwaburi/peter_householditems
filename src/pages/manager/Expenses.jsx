import { Container } from "react-bootstrap";
import ExpenseTable from "../../components/ExpenseTable";

function Expenses(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Expenses
            </h2>

            <ExpenseTable/>

        </Container>

    );

}

export default Expenses;
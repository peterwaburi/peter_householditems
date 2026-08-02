import { Container } from "react-bootstrap";
import InventoryTable from "../../components/InventoryTable";
import "../../styles/inventory.css";

function Inventory() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Inventory Management
            </h2>

            <InventoryTable/>

        </Container>

    );

}

export default Inventory;
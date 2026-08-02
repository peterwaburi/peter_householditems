import { Container } from "react-bootstrap";
import VehicleTable from "../../components/VehicleTable";

function Vehicles(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Vehicles
            </h2>

            <VehicleTable/>

        </Container>

    );

}

export default Vehicles;
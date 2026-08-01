import { Container } from "react-bootstrap";
import CustomerSettingsForm from "../../components/CustomerSettingsForm";
import "../../styles/customerProfile.css";

function Settings() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Settings
            </h2>

            <CustomerSettingsForm/>

        </Container>

    );

}

export default Settings;
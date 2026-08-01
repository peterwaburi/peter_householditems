import { Container } from "react-bootstrap";
import WorkerSettingsForm from "../../components/WorkerSettingsForm";

function Settings() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Settings
            </h2>

            <WorkerSettingsForm />

        </Container>

    );

}

export default Settings;
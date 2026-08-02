import { Container } from "react-bootstrap";
import BackupCard from "../../components/BackupCard";
import "../../styles/system.css";

function BackupRestore() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">

                Backup & Restore

            </h2>

            <BackupCard />

        </Container>

    );

}

export default BackupRestore;
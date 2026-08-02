import { Modal } from "react-bootstrap";
import ServiceForm from "./ServiceForm";

function ServiceModal({ show, onHide, onSave }) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Add Service

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <ServiceForm onSave={onSave} />

            </Modal.Body>

        </Modal>

    );

}

export default ServiceModal;
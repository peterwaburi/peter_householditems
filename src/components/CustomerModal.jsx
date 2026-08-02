import { Modal } from "react-bootstrap";
import CustomerForm from "./CustomerForm";

function CustomerModal({ show, onHide, onSave }) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Add Customer

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <CustomerForm onSave={onSave} />

            </Modal.Body>

        </Modal>

    );

}

export default CustomerModal;
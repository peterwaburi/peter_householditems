import { Modal } from "react-bootstrap";
import WorkerForm from "./WorkerForm";

function WorkerModal({ show, onHide, onSave }) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Add Worker

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <WorkerForm onSave={onSave} />

            </Modal.Body>

        </Modal>

    );

}

export default WorkerModal;
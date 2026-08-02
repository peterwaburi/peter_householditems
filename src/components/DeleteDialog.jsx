import { Modal, Button } from "react-bootstrap";

function DeleteDialog({

    show,
    onHide,
    onDelete,
    title = "Delete Item"

}) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    {title}

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                Are you sure you want to delete this item?

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={onHide}
                >

                    Cancel

                </Button>

                <Button
                    variant="danger"
                    onClick={onDelete}
                >

                    Delete

                </Button>

            </Modal.Footer>

        </Modal>

    );

}

export default DeleteDialog;
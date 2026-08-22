import {
    Modal,
    Button
} from "react-bootstrap";

const ConfirmDialog = ({
    show,
    title = "Confirm Action",
    message = "Are you sure you want to continue?",
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "danger",
    onConfirm,
    onCancel
}) => {

    return (

        <Modal
            show={show}
            onHide={onCancel}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>
                    {title}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                {message}

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={onCancel}
                >
                    {cancelText}
                </Button>

                <Button
                    variant={variant}
                    onClick={onConfirm}
                >
                    {confirmText}
                </Button>

            </Modal.Footer>

        </Modal>
    );
};

export default ConfirmDialog;
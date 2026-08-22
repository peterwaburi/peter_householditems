import {
    Alert,
    Button
} from "react-bootstrap";

const AlertMessage = ({
    message,
    variant = "danger",
    onClose,
    dismissible = true
}) => {

    if (!message) {
        return null;
    }

    return (

        <Alert
            variant={variant}
            dismissible={
                dismissible &&
                Boolean(onClose)
            }
            onClose={onClose}
        >

            {message}

        </Alert>
    );
};

export default AlertMessage;
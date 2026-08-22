import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({
    message = "Loading..."
}) => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-4">

            <Spinner
                animation="border"
                role="status"
            />

            <span className="mt-2 text-muted">
                {message}
            </span>

        </div>
    );
};

export default LoadingSpinner;
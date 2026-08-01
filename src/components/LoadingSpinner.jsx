import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const LoadingSpinner = ({
    message = "Loading, please wait..."
}) => {
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center py-5"
            style={{ minHeight: "250px" }}
        >
            <Spinner
                animation="border"
                variant="primary"
                style={{
                    width: "4rem",
                    height: "4rem"
                }}
            />

            <h5
                className="mt-4"
                style={{
                    color: "#3282B8",
                    fontWeight: "600"
                }}
            >
                {message}
            </h5>

            <p className="text-muted">
                Please wait while we fetch the latest products...
            </p>
        </Container>
    );
};

export default LoadingSpinner;
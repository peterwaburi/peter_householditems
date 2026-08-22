import { Spinner } from "react-bootstrap";

const PageLoader = ({
    message = "Loading..."
}) => {

    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                minHeight: "300px"
            }}
        >

            <Spinner
                animation="border"
                variant="primary"
            />

            <p className="text-muted mt-3 mb-0">
                {message}
            </p>

        </div>
    );
};

export default PageLoader;
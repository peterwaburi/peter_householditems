import { Card } from "react-bootstrap";

const EmptyState = ({
    title = "Nothing found",
    message = "There is no information to display.",
    action = null
}) => {

    return (

        <Card className="border-0 shadow-sm">

            <Card.Body className="text-center py-5">

                <h5 className="fw-bold">
                    {title}
                </h5>

                <p className="text-muted mb-3">
                    {message}
                </p>

                {action}

            </Card.Body>

        </Card>
    );
};

export default EmptyState;
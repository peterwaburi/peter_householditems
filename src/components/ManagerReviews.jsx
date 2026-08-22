import {
    Container,
    Alert
} from "react-bootstrap";

import ManagerNavbar from "./ManagerNavbar";
import ReviewList from "./ReviewList";

const ManagerReviews = () => {

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="mb-4">

                    <h2 className="fw-bold mb-1">
                        Customer Reviews
                    </h2>

                    <p className="text-muted mb-0">
                        Monitor customer feedback and ratings.
                    </p>

                </div>

                <ReviewList
                    allowDelete={true}
                />

            </Container>
        </>
    );
};

export default ManagerReviews;
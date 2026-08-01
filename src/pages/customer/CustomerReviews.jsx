import { Container } from "react-bootstrap";
import ReviewItem from "../../components/ReviewItem";

function CustomerReviews() {

    const reviews = [

        {
            service:"Exterior Wash",
            rating:5,
            comment:"Excellent service."
        },

        {
            service:"Interior Cleaning",
            rating:4,
            comment:"Very clean interior."
        },

        {
            service:"Full Detailing",
            rating:5,
            comment:"Highly recommended."
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                My Reviews
            </h2>

            {reviews.map((review,index)=>(

                <ReviewItem
                    key={index}
                    review={review}
                />

            ))}

        </Container>

    );

}

export default CustomerReviews;
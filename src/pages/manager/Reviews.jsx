import { Container } from "react-bootstrap";
import ReviewCard from "../../components/ReviewCard";

function Reviews() {

    const reviews = [

        {
            customer:"Peter Waburi",
            rating:5,
            comment:"Excellent service and friendly staff.",
            date:"Today"
        },

        {
            customer:"Jane Wanjiru",
            rating:4,
            comment:"Car was cleaned very well.",
            date:"Yesterday"
        },

        {
            customer:"Brian Otieno",
            rating:5,
            comment:"Highly recommend BlueWave.",
            date:"2 days ago"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Reviews
            </h2>

            {reviews.map((review,index)=>(

                <ReviewCard
                    key={index}
                    review={review}
                />

            ))}

        </Container>

    );

}

export default Reviews;
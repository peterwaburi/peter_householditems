import { Container, Row, Col } from "react-bootstrap";
import CustomerProfileCard from "../../components/CustomerProfileCard";

function Profile() {

    return (

        <Container className="py-5">

            <Row>

                <Col lg={4}>

                    <CustomerProfileCard/>

                </Col>

                <Col lg={8}>

                    <h2 className="fw-bold text-primary mb-4">
                        Customer Profile
                    </h2>

                    <p><strong>Name:</strong> Peter Waburi</p>
                    <p><strong>Email:</strong> peter@gmail.com</p>
                    <p><strong>Phone:</strong> +254712345678</p>
                    <p><strong>Loyalty Points:</strong> 320</p>
                    <p><strong>Total Bookings:</strong> 18</p>

                </Col>

            </Row>

        </Container>

    );

}

export default Profile;
import { Container, Row, Col } from "react-bootstrap";
import RevenueCard from "../../components/RevenueCard";

function Analytics(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Analytics
            </h2>

            <Row>

                <Col md={3} className="mb-4">
                    <RevenueCard
                        title="Customers"
                        amount="1,248"
                    />
                </Col>

                <Col md={3} className="mb-4">
                    <RevenueCard
                        title="Bookings"
                        amount="356"
                    />
                </Col>

                <Col md={3} className="mb-4">
                    <RevenueCard
                        title="Workers"
                        amount="18"
                    />
                </Col>

                <Col md={3} className="mb-4">
                    <RevenueCard
                        title="Revenue"
                        amount="KES 975K"
                    />
                </Col>

            </Row>

        </Container>

    );

}

export default Analytics;
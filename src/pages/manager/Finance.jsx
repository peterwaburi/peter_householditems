import { Container, Row, Col } from "react-bootstrap";
import RevenueCard from "../../components/RevenueCard";

function Finance() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Finance
            </h2>

            <Row>

                <Col md={4} className="mb-4">

                    <RevenueCard
                        title="Today's Revenue"
                        amount="KES 45,200"
                    />

                </Col>

                <Col md={4} className="mb-4">

                    <RevenueCard
                        title="Weekly Revenue"
                        amount="KES 243,700"
                    />

                </Col>

                <Col md={4} className="mb-4">

                    <RevenueCard
                        title="Monthly Revenue"
                        amount="KES 975,500"
                    />

                </Col>

            </Row>

        </Container>

    );

}

export default Finance;
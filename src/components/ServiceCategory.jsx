import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function ServiceCategory({ title, services }) {
    return (
        <Container className="my-5">

            <h2 className="fw-bold mb-4 text-primary">
                {title}
            </h2>

            <Row>

                {services.map((service, index) => (

                    <Col
                        lg={4}
                        md={6}
                        className="mb-4"
                        key={index}
                    >

                        <ServiceCard
                            image={service.image}
                            title={service.title}
                            price={service.price}
                            duration={service.duration}
                            description={service.description}
                        />

                    </Col>

                ))}

            </Row>

        </Container>
    );
}

export default ServiceCategory;
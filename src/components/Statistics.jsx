import { Container, Row, Col, Card } from "react-bootstrap";

function Statistics() {
  const stats = [
    { number: "15,000+", title: "Cars Serviced" },
    { number: "4.9★", title: "Customer Rating" },
    { number: "25+", title: "Professional Staff" },
    { number: "8+", title: "Years of Experience" },
  ];

  return (
    <Container className="my-5">
      <Row>
        {stats.map((stat, index) => (
          <Col md={3} sm={6} xs={12} key={index} className="mb-4">
            <Card className="text-center shadow border-0 h-100">
              <Card.Body>
                <h2 className="text-primary fw-bold">{stat.number}</h2>
                <p className="mb-0">{stat.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Statistics;
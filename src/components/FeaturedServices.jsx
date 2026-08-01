import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FeaturedServices() {
  const navigate = useNavigate();

  const services = [
    {
      name: "Exterior Wash",
      price: "From KSh 800",
      duration: "30 Minutes",
      description: "Professional exterior washing and drying.",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      name: "Interior Cleaning",
      price: "From KSh 2,000",
      duration: "1½ Hours",
      description: "Complete vacuuming, dashboard polishing and seat cleaning.",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      name: "Engine Cleaning",
      price: "From KSh 1,500",
      duration: "45 Minutes",
      description: "Safe engine degreasing and detailing.",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Featured Services</h2>
        <p className="text-muted">
          Choose from our most popular professional car care services.
        </p>
      </div>

      <Row>
        {services.map((service, index) => (
          <Col lg={4} md={6} key={index} className="mb-4">
            <Card
              className="shadow h-100"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/services")}
            >
              <Card.Img
                variant="top"
                src={service.image}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{service.name}</Card.Title>

                <h5 className="text-primary">{service.price}</h5>

                <p>
                  <strong>Duration:</strong> {service.duration}
                </p>

                <Card.Text>{service.description}</Card.Text>

                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/services");
                  }}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedServices;
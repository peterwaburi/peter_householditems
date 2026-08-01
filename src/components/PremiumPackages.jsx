import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PremiumPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Silver Package",
      price: "KSh 1,500",
      duration: "45 Minutes",
      image: "https://picsum.photos/600/400?random=11",
      services: [
        "Exterior Wash",
        "Tyre Cleaning",
        "Window Cleaning",
        "Vacuum Interior"
      ]
    },
    {
      name: "Gold Package",
      price: "KSh 2,500",
      duration: "1 Hour 30 Minutes",
      image: "https://picsum.photos/600/400?random=12",
      services: [
        "Everything in Silver",
        "Dashboard Polish",
        "Seat Cleaning",
        "Air Freshener"
      ]
    },
    {
      name: "Platinum Package",
      price: "KSh 4,000",
      duration: "2 Hours",
      image: "https://picsum.photos/600/400?random=13",
      services: [
        "Everything in Gold",
        "Engine Cleaning",
        "Wax Treatment",
        "Interior Detailing"
      ]
    },
    {
      name: "Diamond Package",
      price: "KSh 6,500",
      duration: "3 Hours",
      image: "https://picsum.photos/600/400?random=14",
      services: [
        "Everything in Platinum",
        "Ceramic Coating",
        "Premium Polish",
        "Complete Auto Spa"
      ]
    }
  ];

  return (
    <Container className="my-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Premium Packages</h2>
        <p className="text-muted">
          Choose a package that best suits your vehicle.
        </p>
      </div>

      <Row>

        {packages.map((pkg, index) => (

          <Col lg={3} md={6} className="mb-4" key={index}>

            <Card className="shadow h-100">

              <Card.Img
                variant="top"
                src={pkg.image}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <Card.Body>

                <Card.Title>{pkg.name}</Card.Title>

                <h4 className="text-primary">{pkg.price}</h4>

                <p>
                  <strong>Duration:</strong> {pkg.duration}
                </p>

                <ListGroup variant="flush">

                  {pkg.services.map((item, i) => (

                    <ListGroup.Item key={i}>
                      ✓ {item}
                    </ListGroup.Item>

                  ))}

                </ListGroup>

              </Card.Body>

              <Card.Footer className="bg-white border-0">

                <Button
                  className="w-100"
                  onClick={() => navigate("/services")}
                >
                  Book Package
                </Button>

              </Card.Footer>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default PremiumPackages;
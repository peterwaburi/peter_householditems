import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Gallery() {

  const navigate = useNavigate();

  const gallery = [
    {
      title: "Exterior Car Wash",
      before: "https://picsum.photos/600/400?random=31",
      after: "https://picsum.photos/600/400?random=32",
      description: "Professional exterior wash and shine."
    },
    {
      title: "Interior Detailing",
      before: "https://picsum.photos/600/400?random=33",
      after: "https://picsum.photos/600/400?random=34",
      description: "Complete vacuuming and interior restoration."
    },
    {
      title: "Carpet Cleaning",
      before: "https://picsum.photos/600/400?random=35",
      after: "https://picsum.photos/600/400?random=36",
      description: "Deep carpet cleaning at your home."
    }
  ];

  return (
    <Container className="my-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Before & After Gallery</h2>

        <p className="text-muted">
          See the amazing transformations completed by our team.
        </p>
      </div>

      <Row>

        {gallery.map((item, index) => (

          <Col lg={4} className="mb-4" key={index}>

            <Card className="shadow border-0 h-100">

              <Row className="g-0">

                <Col xs={6}>
                  <img
                    src={item.before}
                    alt="Before"
                    className="img-fluid h-100"
                    style={{ objectFit: "cover" }}
                  />
                </Col>

                <Col xs={6}>
                  <img
                    src={item.after}
                    alt="After"
                    className="img-fluid h-100"
                    style={{ objectFit: "cover" }}
                  />
                </Col>

              </Row>

              <Card.Body>

                <Card.Title>
                  {item.title}
                </Card.Title>

                <Card.Text>
                  {item.description}
                </Card.Text>

                <Button
                  variant="primary"
                  onClick={() => navigate("/services")}
                >
                  View Service
                </Button>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Gallery;
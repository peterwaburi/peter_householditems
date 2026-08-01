import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HeroCarousel() {
  const navigate = useNavigate();

  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
          alt="Premium Car Wash"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>Premium Car Wash Experience</h1>

          <p>
            Professional washing, detailing and auto spa services.
          </p>

          <Button
            variant="primary"
            className="me-2"
            onClick={() => navigate("/services")}
          >
            Book Service
          </Button>

          <Button
            variant="warning"
            onClick={() => navigate("/services")}
          >
            Shop Products
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Auto Spa"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>Interior & Exterior Detailing</h1>

          <p>
            Give your vehicle the attention it deserves.
          </p>

          <Button
            variant="primary"
            onClick={() => navigate("/services")}
          >
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
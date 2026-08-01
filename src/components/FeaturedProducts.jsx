import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FeaturedProducts() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Premium Car Shampoo",
      price: "KSh 850",
      image: "https://picsum.photos/600/400?random=21",
      rating: 5,
      badge: "Best Seller"
    },
    {
      name: "Tyre Shine",
      price: "KSh 650",
      image: "https://picsum.photos/600/400?random=22",
      rating: 5,
      badge: "Popular"
    },
    {
      name: "Engine Oil",
      price: "KSh 2,800",
      image: "https://picsum.photos/600/400?random=23",
      rating: 4,
      badge: "New"
    },
    {
      name: "Dashboard Polish",
      price: "KSh 950",
      image: "https://picsum.photos/600/400?random=24",
      rating: 5,
      badge: "Top Rated"
    }
  ];

  return (
    <Container className="my-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Featured Products</h2>
        <p className="text-muted">
          Professional products for maintaining your vehicle.
        </p>
      </div>

      <Row>

        {products.map((product, index) => (

          <Col lg={3} md={6} className="mb-4" key={index}>

            <Card className="shadow border-0 h-100">

              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <Card.Body>

                <Badge bg="warning" text="dark" className="mb-2">
                  {product.badge}
                </Badge>

                <Card.Title>{product.name}</Card.Title>

                <div className="mb-2">

                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="gold"
                      color="gold"
                    />
                  ))}

                </div>

                <h5 className="text-primary">
                  {product.price}
                </h5>

                <div className="d-grid gap-2 mt-3">

                  <Button variant="primary">
                    <ShoppingCart size={18} className="me-2" />
                    Add to Cart
                  </Button>

                  <Button
                    variant="outline-primary"
                    onClick={() => navigate("/shop")}
                  >
                    View Product
                  </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

      <div className="text-center mt-4">

        <Button
          size="lg"
          variant="dark"
          onClick={() => navigate("/shop")}
        >
          View All Products
        </Button>

      </div>

    </Container>
  );
}

export default FeaturedProducts;
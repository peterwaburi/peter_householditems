import { Container, Row, Col } from "react-bootstrap";
import { FaAward, FaClock, FaCarSide, FaMapMarkedAlt } from "react-icons/fa";

function WhyChooseUs() {
    const items = [
        {
            icon: <FaAward size={40} className="text-primary mb-3" />,
            title: "Professional Quality",
            text: "Experienced staff using premium products."
        },
        {
            icon: <FaClock size={40} className="text-primary mb-3" />,
            title: "Fast Service",
            text: "Quick turnaround without compromising quality."
        },
        {
            icon: <FaCarSide size={40} className="text-primary mb-3" />,
            title: "Complete Vehicle Care",
            text: "Everything your vehicle needs in one place."
        },
        {
            icon: <FaMapMarkedAlt size={40} className="text-primary mb-3" />,
            title: "Home Services",
            text: "Book our professionals to come to your location."
        }
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold text-primary mb-5">
                    Why Choose BlueWave?
                </h2>

                <Row>
                    {items.map((item, index) => (
                        <Col md={3} key={index} className="text-center mb-4">
                            {item.icon}
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default WhyChooseUs;
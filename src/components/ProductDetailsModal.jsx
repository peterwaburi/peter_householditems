import { Modal, Button } from "react-bootstrap";

function ProductDetailsModal({ show, onHide, product }) {

    if (!product) return null;

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>
                    {product.name}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded mb-3"
                />

                <h4 className="text-primary">
                    {product.price}
                </h4>

                <p>{product.description}</p>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={onHide}
                >
                    Close
                </Button>

                <Button variant="primary">
                    Add to Cart
                </Button>

            </Modal.Footer>

        </Modal>

    );

}

export default ProductDetailsModal;
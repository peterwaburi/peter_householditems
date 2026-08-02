import { Modal } from "react-bootstrap";
import ProductForm from "./ProductForm";

function ProductModal({ show, onHide, onSave }) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Add Product

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <ProductForm onSave={onSave} />

            </Modal.Body>

        </Modal>

    );

}

export default ProductModal;
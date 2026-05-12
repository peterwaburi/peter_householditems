import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

const ProductsAndServices = () => {

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [cart, setCart] = useState([]);

    const img_url = "https://peter511.alwaysdata.net/static/images/";

    const navigate = useNavigate();

    const addToCart = (product) => {
        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Use product name as unique identifier if ID is not available
        const uniqueIdentifier = product.id || product.product_name;
        
        // Check if product already exists in cart
        const existingItemIndex = currentCart.findIndex(item => {
            const itemIdentifier = item.id || item.product_name;
            return itemIdentifier === uniqueIdentifier;
        });
        
        if (existingItemIndex !== -1) {
            // Update quantity if item exists
            currentCart[existingItemIndex].quantity = (currentCart[existingItemIndex].quantity || 1) + 1;
        } else {
            // Add new item with quantity 1
            currentCart.push({ ...product, quantity: 1 });
        }
        
        setCart(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const getProducts = async () => {
        setError("");
        setLoading("Fetching products please wait...");

        try {
            const response = await axios.get(
                "https://peter511.alwaysdata.net/api/get_products"
            );
            setProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const groupByCategory = (products) => {
        return products.reduce((acc, product) => {
            const category = product.product_cartegory || 'General';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {});
    };

    const groupedProducts = groupByCategory(products);

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                
                

                <div className="mb-5">
                    <Row>
                        {groupedProducts && Object.keys(groupedProducts).length > 0 && (
                            Object.keys(groupedProducts).map((category) => (
                                <div key={category} className="mb-4">
                                    <h4 className="bg-primary text-white p-2 text-center rounded">
                                        {category}
                                    </h4>
                                    <Row className="mt-3">
                                        {groupedProducts[category].map((product, index) => (
                                            <Col md={3} sm={6} xs={12} key={product.id || index} className="mb-3">
                                                <Card className="shadow product-card h-100">
                                                    <Card.Img
                                                        variant="top"
                                                        src={img_url + product.product_image}
                                                        style={{ height: "200px", objectFit: "cover" }}
                                                    />
                                                    <Card.Body>
                                                        <h5>{product.product_name}</h5>
                                                        <p className="text-muted">
                                                            {product.product_description}
                                                        </p>
                                                        <b className="text-warning">
                                                            Ksh {product.product_cost}
                                                        </b>
                                                        <br /><br />
                                                        
                                                        <div className="d-flex align-items-center gap-2">
                                                            <button
                                                                className="btn btn-dark btn-sm flex-grow-1"
                                                                onClick={() => navigate("/mpesa", { state: { product } })}
                                                            >
                                                                Purchase Now
                                                            </button>
                                                            <button
                                                                className="btn btn-outline-primary"
                                                                style={{
                                                                    borderRadius: '50%',
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    padding: '0',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: '14px'
                                                                }}
                                                                onClick={() => addToCart(product)}
                                                                title="Add to Cart"
                                                            >
                                                                <FaShoppingCart />
                                                            </button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ))
                        )}
                    </Row>
                </div>
            </Container>
            <BeautifulFooter />
        </div>
    );
};

export default ProductsAndServices;

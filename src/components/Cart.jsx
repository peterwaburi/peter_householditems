import { useEffect, useState } from "react";
import { Container, Table, Button, Card, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const navigate = useNavigate();

    const img_url = "https://peter511.alwaysdata.net/static/images/";

    useEffect(() => {
        const loadCart = () => {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const cartItems = JSON.parse(savedCart);
                // Add quantity property to each item if not present
                const cartWithQuantity = cartItems.map(item => Object.assign({}, item, { quantity: item.quantity || 1 }));
                setCart(cartWithQuantity);
                calculateGrandTotal(cartWithQuantity);
            }
        };

        loadCart();
        
        const handleCartUpdate = () => {
            loadCart();
        };
        
        window.addEventListener('cartUpdated', handleCartUpdate);
        
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    }, []);

    const calculateGrandTotal = (items) => {
        const total = items.reduce((sum, item) => {
            const price = parseFloat(item.product_cost || 0);
            const quantity = parseInt(item.quantity || 1);
            return sum + (price * quantity);
        }, 0);
        setGrandTotal(total);
    };

    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return;
        
        const newCart = [...cart];
        newCart[index].quantity = newQuantity;
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        calculateGrandTotal(newCart);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        calculateGrandTotal(newCart);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleProceedToCheckout = () => {
        // Navigate to Mpesa with all cart items for checkout
        navigate("/mpesa", { state: { cart, grandTotal } });
    };
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setGrandTotal(0);
        window.dispatchEvent(new Event('cartUpdated'));
    };
    if (cart.length === 0) {
        return (
            <div>
                <NavBar />
                <Container className="mt-5">
                    <Card className="text-center p-5">
                        <FaShoppingCart size={64} className="text-muted mb-3" />
                        <h3>Your cart is empty</h3>
                        <p className="text-muted">Add some products to your cart to see them here!</p>
                    </Card>
                </Container>
                <BeautifulFooter />
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                <h2 className="text-center mb-4">Shopping Cart</h2>
                
                <Card className="mb-4">
                    <Card.Body>
                        <Table responsive striped hover>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={img_url + item.product_image}
                                                alt={item.product_name}
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                        </td>
                                        <td className="align-middle">
                                            <strong>{item.product_name}</strong>
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge bg-info text-white">
                                                {item.product_cartegory || 'General'}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <span className="text-warning fw-bold">
                                                Ksh {parseFloat(item.product_cost || 0).toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center gap-2">
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                                                    disabled={(item.quantity || 1) <= 1}
                                                >
                                                    -
                                                </Button>
                                                <span className="fw-bold mx-2">
                                                    {item.quantity || 1}
                                                </span>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <span className="text-success fw-bold">
                                                Ksh {(parseFloat(item.product_cost || 0) * (item.quantity || 1)).toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(index)}
                                                title="Remove from cart"
                                            >
                                                <FaTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                <Row className="mt-4">
                    <Col md={6}>
                        <Button
                            variant="outline-danger"
                            onClick={clearCart}
                            className="w-100"
                        >
                            Clear Cart
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Card className="text-center">
                            <Card.Body>
                                <h4 className="mb-3">Grand Total</h4>
                                <h2 className="text-success">
                                    Ksh {grandTotal.toFixed(2)}
                                </h2>
                                <Button
                                    variant="success"
                                    size="lg"
                                    className="mt-3"
                                    onClick={handleProceedToCheckout}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BeautifulFooter />
        </div>
    );
};

export default Cart;
import { useEffect, useState } from "react";
import { Container, Table, Button, Card, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
                <Container className="mt-5">
                    <Card className="text-center p-5">
                        <FaShoppingCart size={64} className="text-muted mb-3" />
                        <h3>Your cart is empty</h3>
                        <p className="text-muted">Add some products to your cart to see them here!</p>
                    </Card>
                </Container>
                </div>
        );
    }

    return (
        <div>
            <Container className="mt-4">
                <h2 className="text-center mb-4" style={{ color: '#0F4C75', fontWeight: '700' }}>Shopping Cart</h2>
                
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
                                            <span className="badge" style={{ backgroundColor: '#17A2B8', color: '#FFFFFF' }}>
                                                {item.product_cartegory || 'General'}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <span style={{ color: '#FFC107', fontWeight: 'bold' }}>
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
                                            <span style={{ color: '#28A745', fontWeight: 'bold' }}>
                                                Ksh {(parseFloat(item.product_cost || 0) * (item.quantity || 1)).toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <Button
                                                size="sm"
                                                onClick={() => removeFromCart(index)}
                                                title="Remove from cart"
                                                style={{ backgroundColor: '#DC3545', borderColor: '#DC3545', color: '#FFFFFF' }}
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
                            onClick={clearCart}
                            className="w-100"
                            style={{ backgroundColor: 'transparent', borderColor: '#DC3545', color: '#DC3545' }}
                        >
                            Clear Cart
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Card className="text-center">
                            <Card.Body>
                                <h4 className="mb-3">Grand Total</h4>
                                <h2 style={{ color: '#28A745' }}>
                                    Ksh {grandTotal.toFixed(2)}
                                </h2>
                                <Button
                                    size="lg"
                                    className="mt-3"
                                    onClick={handleProceedToCheckout}
                                    style={{ backgroundColor: '#28A745', borderColor: '#28A745', color: '#FFFFFF' }}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
    );
};

export default Cart;

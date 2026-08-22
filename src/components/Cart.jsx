import { useEffect, useState } from "react";
import {
    Container,
    Table,
    Button,
    Card,
    Row,
    Col
} from "react-bootstrap";
import {
    FaShoppingCart,
    FaTrash
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [cart, setCart] = useState([]);

    const [grandTotal, setGrandTotal] =
        useState(0);

    const navigate = useNavigate();

    const loadCart = () => {

        try {

            const savedCart =
                localStorage.getItem("cart");

            const items = savedCart
                ? JSON.parse(savedCart)
                : [];

            const normalizedItems =
                Array.isArray(items)
                    ? items.map((item) => ({
                        ...item,
                        quantity:
                            Number(item.quantity) || 1
                    }))
                    : [];

            setCart(normalizedItems);

            calculateGrandTotal(
                normalizedItems
            );

        } catch {

            localStorage.removeItem("cart");

            setCart([]);

            setGrandTotal(0);

        }

    };

    const calculateGrandTotal = (items) => {

        const total = items.reduce(
            (sum, item) => {

                const price = Number(
                    item.product_cost ??
                    item.price ??
                    0
                );

                const quantity =
                    Number(item.quantity) || 1;

                return sum +
                    price * quantity;

            },
            0
        );

        setGrandTotal(total);

    };

    useEffect(() => {

        loadCart();

        const handleCartUpdate = () => {

            loadCart();

        };

        window.addEventListener(
            "cartUpdated",
            handleCartUpdate
        );

        return () => {

            window.removeEventListener(
                "cartUpdated",
                handleCartUpdate
            );

        };

    }, []);

    const saveCart = (items) => {

        setCart(items);

        localStorage.setItem(
            "cart",
            JSON.stringify(items)
        );

        calculateGrandTotal(items);

        window.dispatchEvent(
            new Event("cartUpdated")
        );

    };

    const updateQuantity = (
        index,
        quantity
    ) => {

        const newQuantity =
            Number(quantity);

        if (newQuantity < 1) {

            return;

        }

        const updatedCart =
            [...cart];

        updatedCart[index] = {

            ...updatedCart[index],

            quantity: newQuantity

        };

        saveCart(updatedCart);

    };

    const removeFromCart = (index) => {

        const updatedCart =
            cart.filter(
                (_, i) => i !== index
            );

        saveCart(updatedCart);

    };

    const clearCart = () => {

        localStorage.removeItem("cart");

        setCart([]);

        setGrandTotal(0);

        window.dispatchEvent(
            new Event("cartUpdated")
        );

    };

    const handleCheckout = () => {

        if (cart.length === 0) {

            return;

        }

        navigate(
            "/mpesa",
            {
                state: {
                    cart,
                    grandTotal
                }
            }
        );

    };

    if (cart.length === 0) {

        return (

            <Container className="mt-5">

                <Card className="text-center p-5">

                    <FaShoppingCart
                        size={64}
                        className="text-muted mb-3"
                    />

                    <h3>

                        Your cart is empty

                    </h3>

                    <p className="text-muted">

                        Add products to your cart.

                    </p>

                </Card>

            </Container>

        );

    }

    return (

        <Container className="mt-4">

            <h2
                className="text-center mb-4"
                style={{
                    color: "#0F4C75",
                    fontWeight: "700"
                }}
            >

                Shopping Cart

            </h2>

            <Card className="mb-4">

                <Card.Body>

                    <Table
                        responsive
                        striped
                        hover
                    >

                        <thead>

                            <tr>

                                <th>Image</th>

                                <th>
                                    Product
                                </th>

                                <th>
                                    Category
                                </th>

                                <th>
                                    Price
                                </th>

                                <th>
                                    Quantity
                                </th>

                                <th>
                                    Total
                                </th>

                                <th>
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {cart.map(
                                (item, index) => {

                                    const price =
                                        Number(
                                            item.product_cost ??
                                            item.price ??
                                            0
                                        );

                                    const quantity =
                                        Number(
                                            item.quantity
                                        ) || 1;

                                    return (

                                        <tr
                                            key={
                                                item.id ||
                                                index
                                            }
                                        >

                                            <td>

                                                {(
                                                    item.product_image ||
                                                    item.image
                                                ) ? (

                                                    <img
                                                        src={
                                                            item.product_image ||
                                                            item.image
                                                        }
                                                        alt={
                                                            item.product_name ||
                                                            item.name ||
                                                            "Product"
                                                        }
                                                        style={{
                                                            width:
                                                                "60px",
                                                            height:
                                                                "60px",
                                                            objectFit:
                                                                "cover",
                                                            borderRadius:
                                                                "8px"
                                                        }}
                                                    />

                                                ) : (

                                                    <FaShoppingCart />

                                                )}

                                            </td>

                                            <td className="align-middle">

                                                <strong>

                                                    {
                                                        item.product_name ||
                                                        item.name
                                                    }

                                                </strong>

                                            </td>

                                            <td className="align-middle">

                                                {item.product_cartegory ||
                                                    item.category ||
                                                    "General"}

                                            </td>

                                            <td className="align-middle">

                                                Ksh{" "}
                                                {price.toFixed(2)}

                                            </td>

                                            <td className="align-middle">

                                                <div className="d-flex align-items-center gap-2">

                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        disabled={
                                                            quantity <=
                                                            1
                                                        }
                                                        onClick={() =>
                                                            updateQuantity(
                                                                index,
                                                                quantity -
                                                                    1
                                                            )
                                                        }
                                                    >

                                                        -

                                                    </Button>

                                                    <span>

                                                        {quantity}

                                                    </span>

                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                index,
                                                                quantity +
                                                                    1
                                                            )
                                                        }
                                                    >

                                                        +

                                                    </Button>

                                                </div>

                                            </td>

                                            <td className="align-middle">

                                                Ksh{" "}
                                                {(
                                                    price *
                                                    quantity
                                                ).toFixed(2)}

                                            </td>

                                            <td className="align-middle">

                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            index
                                                        )
                                                    }
                                                >

                                                    <FaTrash />

                                                </Button>

                                            </td>

                                        </tr>

                                    );

                                }
                            )}

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            <Row>

                <Col md={6}>

                    <Button
                        variant="outline-danger"
                        className="w-100"
                        onClick={clearCart}
                    >

                        Clear Cart

                    </Button>

                </Col>

                <Col md={6}>

                    <Card className="text-center">

                        <Card.Body>

                            <h4>

                                Grand Total

                            </h4>

                            <h2 className="text-success">

                                Ksh{" "}
                                {grandTotal.toFixed(2)}

                            </h2>

                            <Button
                                size="lg"
                                className="mt-3"
                                variant="success"
                                onClick={
                                    handleCheckout
                                }
                            >

                                Proceed to Checkout

                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

};

export default Cart;
import {
    Card,
    Button,
    Table
} from "react-bootstrap";

import {
    FaTrash,
    FaPlus,
    FaMinus
} from "react-icons/fa";

import useCart from "../hooks/useCart";

const CartSummary = ({
    onCheckout
}) => {

    const {
        cart,
        total,
        update,
        remove,
        clear
    } = useCart();

    if (cart.length === 0) {

        return (
            <Card className="border-0 shadow-sm">

                <Card.Body className="text-center py-5">

                    <h5>
                        Your cart is empty
                    </h5>

                    <p className="text-muted mb-0">
                        Add products to your cart
                        to continue.
                    </p>

                </Card.Body>

            </Card>
        );

    }

    return (
        <Card className="border-0 shadow-sm">

            <Card.Header className="bg-white d-flex justify-content-between align-items-center">

                <strong>
                    Shopping Cart
                </strong>

                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={clear}
                >
                    Clear Cart
                </Button>

            </Card.Header>

            <Card.Body>

                <Table
                    responsive
                    hover
                    className="align-middle"
                >

                    <thead>

                        <tr>

                            <th>
                                Product
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
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {cart.map(
                            (item, index) => {

                                const id =
                                    item.id ??
                                    item.product_id ??
                                    index;

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

                                    <tr key={id}>

                                        <td>

                                            {
                                                item.product_name ??
                                                item.name ??
                                                "Product"
                                            }

                                        </td>

                                        <td>

                                            KES{" "}
                                            {price.toLocaleString()}

                                        </td>

                                        <td>

                                            <div className="d-flex align-items-center gap-2">

                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() =>
                                                        update(
                                                            id,
                                                            quantity - 1
                                                        )
                                                    }
                                                    disabled={
                                                        quantity <= 1
                                                    }
                                                >
                                                    <FaMinus />
                                                </Button>

                                                <span>
                                                    {quantity}
                                                </span>

                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() =>
                                                        update(
                                                            id,
                                                            quantity + 1
                                                        )
                                                    }
                                                >
                                                    <FaPlus />
                                                </Button>

                                            </div>

                                        </td>

                                        <td>

                                            KES{" "}
                                            {(
                                                price *
                                                quantity
                                            ).toLocaleString()}

                                        </td>

                                        <td>

                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() =>
                                                    remove(id)
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

                <div className="d-flex justify-content-between align-items-center border-top pt-3">

                    <h5 className="mb-0">
                        Grand Total
                    </h5>

                    <h4 className="mb-0 text-primary">
                        KES {total.toLocaleString()}
                    </h4>

                </div>

                {onCheckout && (

                    <Button
                        variant="primary"
                        className="w-100 mt-3"
                        onClick={onCheckout}
                    >
                        Proceed to Checkout
                    </Button>

                )}

            </Card.Body>

        </Card>
    );
};

export default CartSummary;
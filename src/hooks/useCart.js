import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getCart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getCartTotal
} from "../api/cart";

const useCart = () => {

    const [cart, setCart] = useState(
        getCart()
    );

    const [total, setTotal] = useState(
        getCartTotal()
    );

    const refreshCart = useCallback(() => {

        const currentCart = getCart();

        setCart(currentCart);

        setTotal(getCartTotal());

    }, []);

    useEffect(() => {

        window.addEventListener(
            "cartUpdated",
            refreshCart
        );

        return () => {

            window.removeEventListener(
                "cartUpdated",
                refreshCart
            );

        };

    }, [refreshCart]);

    const add = useCallback(
        (product) => {

            addToCart(product);

            refreshCart();

        },
        [refreshCart]
    );

    const update = useCallback(
        (productId, quantity) => {

            updateCartQuantity(
                productId,
                quantity
            );

            refreshCart();

        },
        [refreshCart]
    );

    const remove = useCallback(
        (productId) => {

            removeFromCart(productId);

            refreshCart();

        },
        [refreshCart]
    );

    const clear = useCallback(() => {

        clearCart();

        refreshCart();

    }, [refreshCart]);

    const itemCount = cart.reduce(
        (count, item) => {

            return count +
                (Number(item.quantity) || 1);

        },
        0
    );

    return {
        cart,
        total,
        itemCount,
        add,
        update,
        remove,
        clear,
        refreshCart
    };
};

export default useCart;
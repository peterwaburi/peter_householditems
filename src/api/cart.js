const CART_KEY = "cart";

export const getCart = () => {
    try {
        const cart =
            localStorage.getItem(CART_KEY);

        const parsed =
            cart ? JSON.parse(cart) : [];

        return Array.isArray(parsed)
            ? parsed
            : [];
    } catch {
        return [];
    }
};

export const saveCart = (cart) => {
    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    window.dispatchEvent(
        new Event("cartUpdated")
    );

    return cart;
};

export const addToCart = (product) => {

    const cart = getCart();

    const productId =
        product.id ??
        product.product_id;

    const index = cart.findIndex(
        (item) =>
            (
                item.id ??
                item.product_id
            ) === productId
    );

    if (index >= 0) {

        cart[index] = {
            ...cart[index],
            quantity:
                Number(
                    cart[index].quantity
                ) + 1
        };

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    return saveCart(cart);
};

export const updateCartQuantity = (
    productId,
    quantity
) => {

    const cart = getCart();

    const updated = cart.map(
        (item) => {

            const id =
                item.id ??
                item.product_id;

            if (id !== productId) {
                return item;
            }

            return {
                ...item,
                quantity:
                    Math.max(
                        1,
                        Number(quantity) || 1
                    )
            };
        }
    );

    return saveCart(updated);
};

export const removeFromCart = (
    productId
) => {

    const cart = getCart();

    const updated = cart.filter(
        (item) => {

            const id =
                item.id ??
                item.product_id;

            return id !== productId;
        }
    );

    return saveCart(updated);
};

export const clearCart = () => {

    localStorage.removeItem(
        CART_KEY
    );

    window.dispatchEvent(
        new Event("cartUpdated")
    );
};

export const getCartTotal = () => {

    return getCart().reduce(
        (total, item) => {

            const price = Number(
                item.product_cost ??
                item.price ??
                0
            );

            const quantity =
                Number(item.quantity) || 1;

            return total +
                price * quantity;

        },
        0
    );
};
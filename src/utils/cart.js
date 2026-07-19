export const CART_STORAGE_KEY = "cart";
export const CART_UPDATED_EVENT = "cartUpdated";

export const dispatchCartUpdated = () => {
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
};

export const getCart = () => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
};

export const saveCart = (cart) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    dispatchCartUpdated();
};

export const clearCart = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    dispatchCartUpdated();
};

const getItemIdentifier = (item) => item.id || item.product_name;

export const addProductToCart = (product) => {
    const cart = getCart();
    const identifier = getItemIdentifier(product);
    const existingItemIndex = cart.findIndex(
        (item) => getItemIdentifier(item) === identifier
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity =
            (cart[existingItemIndex].quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    return cart;
};

export const getCartCount = (cart = getCart()) =>
    cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

export const calculateCartTotal = (cart = getCart()) =>
    cart.reduce((sum, item) => {
        const price = parseFloat(item.product_cost || 0);
        const quantity = parseInt(item.quantity || 1);
        return sum + price * quantity;
    }, 0);

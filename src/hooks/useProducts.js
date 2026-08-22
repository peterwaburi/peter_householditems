import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../api/product";

const useProducts = () => {

    const [products, setProducts] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const loadProducts = useCallback(
        async () => {

            setLoading(true);
            setError("");

            try {

                const response =
                    await getProducts();

                const data =
                    response.data?.data ??
                    response.data?.products ??
                    response.data ??
                    [];

                setProducts(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load products."
                );

            } finally {

                setLoading(false);

            }

        },
        []
    );

    const addProduct = async (data) => {

        await createProduct(data);

        await loadProducts();

    };

    const editProduct = async (
        id,
        data
    ) => {

        await updateProduct(
            id,
            data
        );

        await loadProducts();

    };

    const removeProduct = async (id) => {

        await deleteProduct(id);

        await loadProducts();

    };

    useEffect(() => {

        loadProducts();

    }, [loadProducts]);

    return {
        products,
        loading,
        error,
        refresh: loadProducts,
        addProduct,
        editProduct,
        removeProduct
    };
};

export default useProducts;
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function useProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        load();

    }, []);

    async function load() {

        const response = await getProducts();

        setProducts(response.data);

    }

    return {

        products,
        reload: load

    };

}
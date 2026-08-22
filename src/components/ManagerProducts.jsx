import { useState } from "react";
import {
    Container,
    Table,
    Button,
    Alert,
    Modal,
    Form
} from "react-bootstrap";

import ManagerNavbar from "./ManagerNavbar";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";
import ConfirmDialog from "./ConfirmDialog";
import SearchBar from "./SearchBar";

import useProducts from "../hooks/useProducts";

const ManagerProducts = () => {

    const {
        products,
        loading,
        error,
        addProduct,
        removeProduct
    } = useProducts();

    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: ""
    });

    const filteredProducts = products.filter((product) => {

        const text = [
            product.product_name,
            product.name,
            product.description
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return text.includes(
            search.toLowerCase()
        );
    });

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleAdd = async (event) => {

        event.preventDefault();

        setSaving(true);

        try {

            await addProduct({
                product_name: form.name,
                name: form.name,
                description: form.description,
                price: Number(form.price),
                stock: Number(form.stock)
            });

            setForm({
                name: "",
                description: "",
                price: "",
                stock: ""
            });

            setShowForm(false);

        } catch (err) {

            console.error(
                "Unable to add product:",
                err
            );

        } finally {

            setSaving(false);

        }
    };

    const handleDelete = async () => {

        if (!selectedProduct) {
            return;
        }

        try {

            await removeProduct(
                selectedProduct.id ??
                selectedProduct.product_id
            );

            setSelectedProduct(null);

        } catch (err) {

            console.error(
                "Unable to delete product:",
                err
            );
        }
    };

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Products
                        </h2>

                        <p className="text-muted mb-0">
                            Add and manage products sold by BlueWave.
                        </p>

                    </div>

                    <Button
                        variant="primary"
                        onClick={() => setShowForm(true)}
                    >
                        Add Product
                    </Button>

                </div>

                <div className="mb-3">

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search products..."
                    />

                </div>

                {loading && (
                    <PageLoader
                        message="Loading products..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading &&
                    !error &&
                    filteredProducts.length === 0 && (

                    <EmptyState
                        title="No products found"
                        message="There are currently no products to display."
                    />

                )}

                {!loading &&
                    !error &&
                    filteredProducts.length > 0 && (

                    <div className="table-responsive">

                        <Table
                            hover
                            className="align-middle shadow-sm"
                        >

                            <thead className="table-dark">

                                <tr>

                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredProducts.map(
                                    (product, index) => {

                                        const id =
                                            product.id ??
                                            product.product_id ??
                                            index;

                                        const name =
                                            product.product_name ??
                                            product.name ??
                                            "Product";

                                        const price =
                                            Number(
                                                product.price ??
                                                product.product_cost ??
                                                0
                                            );

                                        const stock =
                                            product.stock ??
                                            product.quantity ??
                                            0;

                                        return (

                                            <tr key={id}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td className="fw-bold">
                                                    {name}
                                                </td>

                                                <td>
                                                    {
                                                        product.description ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    KES{" "}
                                                    {price.toLocaleString()}
                                                </td>

                                                <td>
                                                    {stock}
                                                </td>

                                                <td>

                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() =>
                                                            setSelectedProduct(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>

                                                </td>

                                            </tr>

                                        );
                                    }
                                )}

                            </tbody>

                        </Table>

                    </div>

                )}

            </Container>

            <Modal
                show={showForm}
                onHide={() => setShowForm(false)}
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        Add Product
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={handleAdd}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Product Name
                            </Form.Label>

                            <Form.Control
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Description
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Price (KES)
                            </Form.Label>

                            <Form.Control
                                type="number"
                                min="0"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Stock
                            </Form.Label>

                            <Form.Control
                                type="number"
                                min="0"
                                name="stock"
                                value={form.stock}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-100"
                            disabled={saving}
                        >
                            {saving
                                ? "Adding..."
                                : "Add Product"}
                        </Button>

                    </Form>

                </Modal.Body>

            </Modal>

            <ConfirmDialog
                show={Boolean(selectedProduct)}
                title="Delete Product"
                message="Are you sure you want to delete this product?"
                confirmText="Delete Product"
                onConfirm={handleDelete}
                onCancel={() =>
                    setSelectedProduct(null)
                }
            />

        </>
    );
};

export default ManagerProducts;
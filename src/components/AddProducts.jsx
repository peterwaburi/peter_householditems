import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";
import LoadingSpinner from "./LoadingSpinner";

const AddProducts = () => {
    let [product_name, setProductName] = useState("");
    let [product_description, setProductDescription] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_cartegory, setProductCartegory] = useState("");
    let [product_subcategory, setProductSubcategory] = useState("");
    let [product_image, setProductImage] = useState("");

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const subcategoryOptions = {
        Product: [
            { value: "car-care-detailing", label: "Car Care and Detailing" },
            { value: "air-fresheners-fragrance", label: "Air Fresheners and Fragrance" },
            { value: "safety-emergency", label: "Safety and Emergency" },
        ],
        Service: [
            { value: "car-wash-service", label: "Car Wash Service" },
            { value: "auto-detailing-service", label: "Auto Detailing Service" },
            { value: "mechanical-garage-service", label: "Mechanical and Garage Service" },
            { value: "tire-wheel-services", label: "Tire and Wheel Services" },
            { value: "electric-services", label: "Electric Services" },
        ],
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")
        setSuccess("")
        setLoading("")


        try {
            const data = new FormData()
            data.append("product_name", product_name);
            data.append("product_description", product_description);
            data.append("product_cost", product_cost);
            data.append("product_cartegory", product_cartegory);
            data.append("product_subcategory", product_subcategory);
            data.append("product_image", product_image);

            const response = await axios.post("https://peter511.alwaysdata.net/api/add_product", data);
            console.log(response)

            if (response.status === 200) {
                setLoading("");
                setSuccess(response.data.message);

                setProductName("");
                setProductDescription("");
                setProductCost("");
                setProductCartegory("");
                setProductSubcategory("");
                setProductImage("");
            }

        } catch (error) {
            setError(error.message)
            setLoading("")
        }

    }


    return (
        <div className="row justify-content-center mt-4">
            <NavBar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                {loading && <LoadingSpinner message={loading} />}
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="product name"
                        required
                        onChange={(e) => { setProductName(e.target.value) }}
                        value={product_name}
                    /><br />

                    <textarea
                        className="form-control"
                        placeholder="product description"
                        rows="4"
                        required
                        onChange={(e) => { setProductDescription(e.target.value) }}
                        value={product_description}
                    ></textarea>
                    <br />


                    <input type="number"
                        className="form-control"
                        required
                        placeholder="Enter product cost"
                        onChange={(e) => { setProductCost(e.target.value) }}
                        value={product_cost}
                    />
                    <br />

                    <label htmlFor="" className="form-label">
                        Category
                    </label>
                    <select className="form-select"
                        required
                        value={product_cartegory}
                        onChange={(e) => {
                            setProductCartegory(e.target.value);
                            setProductSubcategory("");
                        }}
                    >
                        <option value="">Select Category</option>
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                    </select>
                    <br />

                    {product_cartegory && (
                        <>
                            <label htmlFor="" className="form-label">
                                Subcategory
                            </label>
                            <select className="form-select"
                                required
                                value={product_subcategory}
                                onChange={(e) => { setProductSubcategory(e.target.value) }}
                            >
                                <option value="">Select Subcategory</option>
                                {subcategoryOptions[product_cartegory].map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <br />
                        </>
                    )}

                    <label htmlFor="" className="form-label">
                        product image
                    </label>
                    <input type="file" className="form-control"
                        required
                        placeholder="Enter image"
                        // multiple  selecting multiple images
                        accept="image/*"
                        // accept="image/pdf"  selecting pdf only
                        onChange={(e) => { setProductImage(e.target.files[0]) }}
                    />
                    <br />

                    <button className="btn btn-dark">Add products</button>

                </form>
            </div>
            <BeautifulFooter />
        </div>
    );
}

export default AddProducts;
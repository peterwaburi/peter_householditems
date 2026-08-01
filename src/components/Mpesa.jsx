import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Mpesa = () => {
    const location = useLocation();
    const { product, cart, grandTotal } = location.state || {};
    console.log(location.state)
    const img_url = "https://peter511.alwaysdata.net/static/images/";

    // Determine if this is cart checkout or single product purchase
    const isCartCheckout = cart && grandTotal;
    const amount = isCartCheckout ? grandTotal : (product ? product.product_cost : 0);
    const displayInfo = isCartCheckout 
        ? { title: "Cart Checkout", description: `${cart.length} items`, name: "Multiple Products" }
        : product 
        ? { title: product.product_name, description: product.product_description, name: product.product_name }
        : { title: "Product", description: "No product selected", name: "Unknown" };

    let [phone, setPhone] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")
        setSuccess("")
        setLoading("Please Wait...")

        try {
            const data = new FormData();
            data.append("amount", amount)
            data.append("phone", phone)

            const response = await axios.post("https://peter511.alwaysdata.net/api/mpesa_payment", data)
            console.log(response)

            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)

                setPhone("")
            }

        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }

    return (
        <div className="row justify-content-center mt-4">
               <h2>LIPA NA MPESA</h2>

            <div className="col-md-3">
                {!isCartCheckout && product && (
                    <img src={img_url + product.product_image} alt="" className="rounded img-thumbnail" />
                )}
                {isCartCheckout && (
                    <div className="text-center p-3">
                        <h4 className="text-success">Cart Checkout</h4>
                        <p className="text-muted">{cart.length} items</p>
                    </div>
                )}
            </div>

            <div className="col-md-3 p-4">
                <h2 className="text-dark">{displayInfo.name}</h2>
                <h4 className="text-primary">{displayInfo.title}</h4>
                <p className="text-muted">{displayInfo.description}</p>
                <h4 className="text-warning">Ksh {amount}</h4>
                <hr />

                {loading && <LoadingSpinner message={loading} />}
                <h6 className="text-danger">{error}</h6>
                <h6 className="text-success">{success}</h6>

                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        className="form-control"
                        required
                        placeholder="Enter Amount"
                        readOnly
                        value={amount}
                    />
                    <br />

                    <input
                        type="tel"
                        className="form-control"
                        required
                        placeholder="Enter MPESA NO 254xxxxxxxxxx"
                        onChange={(e) => { setPhone(e.target.value) }}
                        value={phone}

                    />
                    <br />

                    <button className="btn btn-dark">Pay Now</button>
                </form>
            </div>
        </div>
    );
}

export default Mpesa;

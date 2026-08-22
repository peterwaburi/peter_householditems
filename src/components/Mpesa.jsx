import { useState } from "react";
import { useLocation } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

import { initiateStkPush } from "../api/mpesa";

const Mpesa = () => {

    const location = useLocation();

    const {
        product,
        cart,
        grandTotal
    } = location.state || {};

    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState("");

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const isCartCheckout =
        Array.isArray(cart) &&
        cart.length > 0;

    const amount = isCartCheckout
        ? grandTotal
        : product
            ? Number(
                product.product_cost ??
                product.price ??
                0
            )
            : 0;

    const title = isCartCheckout
        ? "Cart Checkout"
        : product?.product_name ||
          product?.name ||
          "Product";

    const description = isCartCheckout
        ? `${cart.length} items`
        : product?.product_description ||
          product?.description ||
          "";

    const image =
        product?.product_image ||
        product?.image ||
        "";

    const imageUrl = image
        ? image.startsWith("http")
            ? image
            : `http://127.0.0.1:5000/uploads/${image}`
        : "";

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading("Please Wait...");

        setError("");

        setSuccess("");

        try {

            const response =
                await initiateStkPush({

                    amount,

                    phone,

                    reference:
                        isCartCheckout
                            ? "BLUEWAVE-CART"
                            : `BLUEWAVE-${product?.id || "PRODUCT"}`,

                    description:
                        isCartCheckout
                            ? "BlueWave Cart Payment"
                            : `BlueWave ${title}`

                });

            setSuccess(
                response.data?.message ||
                "Payment request sent. Check your phone."
            );

            setPhone("");

        } catch (err) {

            setError(

                err.response?.data?.message ||
                err.message ||
                "Unable to initiate payment."

            );

        } finally {

            setLoading("");

        }

    };

    return (

        <div className="row justify-content-center mt-4">

            <div className="col-md-8">

                <h2 className="text-center">

                    LIPA NA MPESA

                </h2>

                <div className="row mt-4">

                    <div className="col-md-5">

                        {!isCartCheckout &&
                            imageUrl && (

                            <img
                                src={imageUrl}
                                alt={title}
                                className="rounded img-thumbnail"
                            />

                        )}

                        {isCartCheckout && (

                            <div className="text-center p-3">

                                <h4>

                                    Cart Checkout

                                </h4>

                                <p>

                                    {cart.length} items

                                </p>

                            </div>

                        )}

                    </div>

                    <div className="col-md-7 p-4">

                        <h2>

                            {title}

                        </h2>

                        <p className="text-muted">

                            {description}

                        </p>

                        <h4>

                            Ksh{" "}
                            {Number(amount).toFixed(2)}

                        </h4>

                        <hr />

                        {loading && (

                            <LoadingSpinner
                                message={loading}
                            />

                        )}

                        {error && (

                            <h6 className="text-danger">

                                {error}

                            </h6>

                        )}

                        {success && (

                            <h6 className="text-success">

                                {success}

                            </h6>

                        )}

                        <form
                            onSubmit={handleSubmit}
                        >

                            <input
                                type="tel"
                                className="form-control"
                                placeholder="2547XXXXXXXX"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <br />

                            <button
                                className="btn btn-dark"
                                type="submit"
                                disabled={
                                    !!loading ||
                                    amount <= 0
                                }
                            >

                                Pay Now

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Mpesa;
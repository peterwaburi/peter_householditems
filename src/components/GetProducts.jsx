import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");



    // base url for image location
    const img_url = "https://peter511.alwaysdata.net/static/images/"

    let navigator = useNavigate();


    const getProducts = async () => {
        setError("")
        setLoading("Fetching products please wait")

        try {
            const response = await axios.get("https://peter511.alwaysdata.net/api/get_products")
            console.log(response);

            if (response.status === 200) {
                setLoading("")
                setProducts(response.data)
            }


        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    };

    useEffect(() => { getProducts() }, [])
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.product_cartegory || "Others";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="row">
            <NavBar />

            <section>

            </section>
            <h3 className="text-success ">we have a variety of products you can choose from:</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>

            {/* map/ loop over the products to access one product at a time */}



            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="col-12">

                    {/* Category title */}
                    <h3 className="bg-dark text-white p-2 mt-4">
                        {category}
                    </h3>

                    <div className="row">
                        {groupedProducts[category].map((product) => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <div className="card shadow card-margin">
                                    <img
                                        src={img_url + product.product_image}
                                        alt=""
                                        className="product_img mt_4"
                                    />
                                    <div className="card-body">
                                        <h5>{product.product_name}</h5>
                                        <p className="text-muted">{product.product_description}</p>
                                        <b className="text-warning">{product.product_cost}</b>
                                        <br />
                                        <button
                                            className="btn btn-dark"
                                            onClick={() =>
                                                navigator("/mpesa", { state: { product } })
                                            }
                                        >
                                            Purchase now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
            <BeautifulFooter />


        </div>



    );

}

export default GetProducts;



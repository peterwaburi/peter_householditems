import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")

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

    return (
        <div className="row">
               <NavBar/>
            <section>

                {/* <div class="text-warning p-1 text-center bg-danger my-1 b-danger">
                    <marquee> Don`t forget to shop on Black Friday. Items are <b>40% 0ff</b></marquee>
                </div> */}
            </section>
            <h3 className="text-success ">we have a variety of products you can choose from:</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>

            {/* map/ loop over the products to access one product at a time */}

            {products.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt_4" />
                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">{product.product_cost}</b>
                            <br />
                            <button className="btn btn-dark" onClick={() => { navigator("/makepayment", { state: { product } }) }}>Purchase now</button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetProducts;
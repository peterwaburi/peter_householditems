import { Container } from "react-bootstrap";
import ProductsTable from "../../components/ProductsTable";

function Products() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Product Management
            </h2>

            <ProductsTable />

        </Container>

    );

}

export default Products;
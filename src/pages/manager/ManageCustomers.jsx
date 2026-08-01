import { Container } from "react-bootstrap";
import ManagerCustomerCard from "../../components/ManagerCustomerCard";

function ManageCustomers() {

    const customers = [

        {
            name:"Peter Waburi",
            email:"peter@gmail.com",
            phone:"0712345678",
            bookings:12
        },

        {
            name:"Jane Wanjiru",
            email:"jane@gmail.com",
            phone:"0700112233",
            bookings:8
        },

        {
            name:"Brian Otieno",
            email:"brian@gmail.com",
            phone:"0799887766",
            bookings:15
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customers
            </h2>

            {customers.map((customer,index)=>(

                <ManagerCustomerCard
                    key={index}
                    customer={customer}
                />

            ))}

        </Container>

    );

}

export default ManageCustomers;
import { Container } from "react-bootstrap";
import OrderCard from "../../components/OrderCard";

function CustomerOrders() {

    const orders = [

        {
            title:"Exterior Wash",
            date:"02 Aug 2026",
            status:"Completed",
            statusColor:"success",
            price:"KES 500"
        },

        {
            title:"Interior Cleaning",
            date:"06 Aug 2026",
            status:"Pending",
            statusColor:"warning",
            price:"KES 1,000"
        },

        {
            title:"Full Detailing",
            date:"10 Aug 2026",
            status:"Scheduled",
            statusColor:"primary",
            price:"KES 3,500"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                My Orders
            </h2>

            {orders.map((order,index)=>(

                <OrderCard
                    key={index}
                    order={order}
                />

            ))}

        </Container>

    );

}

export default CustomerOrders;
import { Container } from "react-bootstrap";
import ServiceProviderCard from "../../components/ServiceProviderCard";

function ServiceProviders() {

    const providers = [

        {
            name:"BlueWave Home Cleaning",
            service:"Home Interior Cleaning",
            status:"Approved"
        },

        {
            name:"Quick Auto Spa",
            service:"Mobile Car Wash",
            status:"Pending"
        },

        {
            name:"Elite Detailing",
            service:"Premium Detailing",
            status:"Approved"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Service Providers
            </h2>

            {providers.map((provider,index)=>(

                <ServiceProviderCard
                    key={index}
                    provider={provider}
                />

            ))}

        </Container>

    );

}

export default ServiceProviders;
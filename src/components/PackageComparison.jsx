import { Container, Row, Col } from "react-bootstrap";
import PackagePricingCard from "./PackagePricingCard";

function PackageComparison() {

    const packages=[

        {
            level:"Basic",
            name:"Express Wash",
            price:"KES 500",
            features:[
                "Exterior Wash",
                "Tyre Cleaning",
                "Quick Dry"
            ]
        },

        {
            level:"Popular",
            name:"Premium Wash",
            price:"KES 1,500",
            features:[
                "Exterior Wash",
                "Interior Cleaning",
                "Vacuum",
                "Dashboard Polish"
            ]
        },

        {
            level:"VIP",
            name:"Full Detailing",
            price:"KES 3,500",
            features:[
                "Full Interior",
                "Exterior Polish",
                "Engine Cleaning",
                "Wax",
                "Tyre Shine"
            ]
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-center text-primary mb-5">
                Compare Packages
            </h2>

            <Row>

                {packages.map((pack,index)=>(

                    <Col lg={4} key={index} className="mb-4">

                        <PackagePricingCard
                            pack={pack}
                        />

                    </Col>

                ))}

            </Row>

        </Container>

    );

}

export default PackageComparison;
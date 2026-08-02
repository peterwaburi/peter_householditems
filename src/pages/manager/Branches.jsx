import { Container, Row, Col } from "react-bootstrap";
import BranchCard from "../../components/BranchCard";
import "../../styles/branches.css";

function Branches() {

    const branches = [

        {
            name:"BlueWave CBD",
            location:"Nairobi CBD",
            workers:12,
            status:"Open"
        },

        {
            name:"BlueWave Karen",
            location:"Karen",
            workers:9,
            status:"Open"
        },

        {
            name:"BlueWave Westlands",
            location:"Westlands",
            workers:15,
            status:"Open"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Branches
            </h2>

            <Row>

                {branches.map((branch,index)=>(

                    <Col lg={4} key={index}>

                        <BranchCard
                            branch={branch}
                        />

                    </Col>

                ))}

            </Row>

        </Container>

    );

}

export default Branches;
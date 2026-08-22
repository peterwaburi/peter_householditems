import { Card } from "react-bootstrap";

const ManagerStatCard = ({
    title,
    value,
    icon,
    color = "#0F4C81"
}) => {

    return (
        <Card
            className="border-0 shadow-sm h-100"
        >

            <Card.Body>

                <div className="d-flex align-items-center justify-content-between">

                    <div>

                        <p className="text-muted mb-1">
                            {title}
                        </p>

                        <h3 className="fw-bold mb-0">
                            {value}
                        </h3>

                    </div>

                    <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: "52px",
                            height: "52px",
                            backgroundColor: color
                        }}
                    >
                        {icon}
                    </div>

                </div>

            </Card.Body>

        </Card>
    );
};

export default ManagerStatCard;
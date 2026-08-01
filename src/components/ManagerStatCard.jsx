import { Card } from "react-bootstrap";

function ManagerStatCard({ title, value, icon, color }) {
    return (
        <Card className="manager-card shadow-sm border-0 h-100">
            <Card.Body className="d-flex justify-content-between align-items-center">

                <div>
                    <h6 className="text-muted">{title}</h6>
                    <h2 className="fw-bold">{value}</h2>
                </div>

                <div
                    className="manager-icon"
                    style={{ background: color }}
                >
                    {icon}
                </div>

            </Card.Body>
        </Card>
    );
}

export default ManagerStatCard;
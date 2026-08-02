import { Card, Button } from "react-bootstrap";

function BackupCard() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Backup & Restore
                </h4>

                <p>

                    Last Backup:
                    <strong> 01 Aug 2026 - 10:00 PM</strong>

                </p>

                <div className="d-grid gap-3">

                    <Button variant="primary">
                        Create Backup
                    </Button>

                    <Button variant="success">
                        Restore Backup
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

}

export default BackupCard;
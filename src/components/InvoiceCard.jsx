import { Card, Button } from "react-bootstrap";

function InvoiceCard({ invoice }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{invoice.number}</h5>

                        <p>{invoice.date}</p>

                    </div>

                    <div className="text-end">

                        <h5 className="text-primary">
                            {invoice.amount}
                        </h5>

                        <Button
                            size="sm"
                            variant="outline-primary"
                        >
                            Download
                        </Button>

                    </div>

                </div>

            </Card.Body>

        </Card>

    );

}

export default InvoiceCard;
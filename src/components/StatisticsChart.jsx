import { Card, ProgressBar } from "react-bootstrap";

function StatisticsChart(){

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Monthly Statistics
                </h4>

                <p>Bookings</p>

                <ProgressBar
                    now={80}
                    className="mb-3"
                />

                <p>Orders</p>

                <ProgressBar
                    now={60}
                    className="mb-3"
                />

                <p>Customer Satisfaction</p>

                <ProgressBar
                    now={95}
                />

            </Card.Body>

        </Card>

    );

}

export default StatisticsChart;
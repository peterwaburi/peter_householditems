import { Accordion } from "react-bootstrap";

function FAQAccordion() {

    return (

        <Accordion>

            <Accordion.Item eventKey="0">

                <Accordion.Header>
                    How do I book a service?
                </Accordion.Header>

                <Accordion.Body>
                    Select a service, choose a date and time, then confirm your booking.
                </Accordion.Body>

            </Accordion.Item>

            <Accordion.Item eventKey="1">

                <Accordion.Header>
                    Which payment methods are supported?
                </Accordion.Header>

                <Accordion.Body>
                    M-Pesa, Cash and Card payments.
                </Accordion.Body>

            </Accordion.Item>

            <Accordion.Item eventKey="2">

                <Accordion.Header>
                    Can I cancel my booking?
                </Accordion.Header>

                <Accordion.Body>
                    Yes. Cancel from your dashboard before the scheduled time.
                </Accordion.Body>

            </Accordion.Item>

            <Accordion.Item eventKey="3">

                <Accordion.Header>
                    Do you offer home services?
                </Accordion.Header>

                <Accordion.Body>
                    Yes. You can provide your location during booking.
                </Accordion.Body>

            </Accordion.Item>

        </Accordion>

    );

}

export default FAQAccordion;
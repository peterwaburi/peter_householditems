import { Container } from "react-bootstrap";
import InvoiceCard from "../../components/InvoiceCard";

function Invoices() {

    const invoices = [

        {
            number: "INV-1001",
            date: "01 Aug 2026",
            amount: "KES 1,500"
        },

        {
            number: "INV-1002",
            date: "05 Aug 2026",
            amount: "KES 800"
        },

        {
            number: "INV-1003",
            date: "10 Aug 2026",
            amount: "KES 3,500"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                My Invoices
            </h2>

            {invoices.map((invoice,index)=>(

                <InvoiceCard
                    key={index}
                    invoice={invoice}
                />

            ))}

        </Container>

    );

}

export default Invoices;
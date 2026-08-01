import { ProgressBar } from "react-bootstrap";

function BookingStepper({ step }) {

    return (

        <>

            <ProgressBar
                now={(step / 4) * 100}
                className="mb-4"
            />

            <div className="d-flex justify-content-between mb-4">

                <span className={step >= 1 ? "fw-bold text-primary" : ""}>Service</span>

                <span className={step >= 2 ? "fw-bold text-primary" : ""}>Schedule</span>

                <span className={step >= 3 ? "fw-bold text-primary" : ""}>Payment</span>

                <span className={step >= 4 ? "fw-bold text-primary" : ""}>Done</span>

            </div>

        </>

    );

}

export default BookingStepper;
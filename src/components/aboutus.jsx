import React from "react";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";

const AboutUs = () => {
    return (
        <div>
            <NavBar />

            <div className="container py-5">

                {/* TITLE */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">
                        About Blue Wave Car Wash & Auto Spa
                    </h1>
                    <p className="text-muted fs-5 mt-3">
                        Premium care, detailing, and transformation for your vehicle
                    </p>
                </div>

                {/* INTRO TEXT */}
                <div className="card shadow border-0 mb-4">
                    <div className="card-body">

                        <p className="fs-5">
                            At <strong>Blue Wave Car Wash & Auto Spa</strong>, we believe that every vehicle deserves
                            more than just a wash — it deserves a transformation. We are dedicated to restoring
                            brilliance, comfort, and pride to every car that enters our care.
                        </p>

                        <p className="fs-5">
                            From the moment your vehicle arrives, it is treated with precision, passion, and
                            professional attention that goes beyond ordinary cleaning. Every service is designed
                            to deliver excellence through visible results.
                        </p>

                    </div>
                </div>

                {/* SECTION 1 */}
                <div className="row align-items-center mb-5">

                    <div className="col-md-6 mb-3">
                        <img
                            src="/immages/lightservice.avif"
                            alt="Exterior Detailing"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-6">
                        <h3 className="text-success">Exterior Excellence</h3>
                        <p className="fs-5 text-muted">
                            We specialize in advanced exterior washing techniques that remove dirt,
                            grime, and road residue while protecting your paint and restoring shine.
                            Our professional team uses premium products and state-of-the-art equipment
                            to ensure your vehicle looks its absolute best.
                        </p>
                    </div>

                </div>

                {/* SECTION 2 */}
                <div className="row align-items-center mb-5">

                    <div className="col-md-6 mb-3">
                        <img
                            src="/immages/interior.webp"
                            alt="Interior Cleaning"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-6">
                        <h3 className="text-info">Interior Care & Comfort</h3>
                        <p className="fs-5 text-muted">
                            Our deep interior cleaning restores freshness to seats, carpets, dashboards,
                            and every corner of your vehicle for a comfortable driving experience. We use
                            specialized cleaning agents that eliminate odors and protect your interior surfaces.
                        </p>
                    </div>

                </div>

                {/* SECTION 3 */}
                <div className="row align-items-center mb-5">

                    <div className="col-md-6 mb-3">
                        <img
                            src="/immages/paintsealant.jpg"
                            alt="Premium Polishing"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-6">
                        <h3 className="text-warning">Premium Finish & Protection</h3>
                        <p className="fs-5 text-muted">
                            Through advanced waxing and polishing, we enhance your vehicle's appearance,
                            ensuring long-lasting protection and a showroom-quality finish.
                        </p>
                    </div>

                </div>

                {/* FINAL STATEMENT */}
                <div className="text-center mt-5">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body p-4">
                            <p className="fs-5">
                                At Blue Wave Car Wash & Auto Spa, we don't just wash cars — we restore confidence,
                                elevate appearance, and redefine automotive care. Every service is performed with
                                meticulous attention to detail and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>

            </div> {/* container closes here */}
            <BeautifulFooter />
        </div>
    );
};

export default AboutUs;
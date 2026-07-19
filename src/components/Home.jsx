import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">

                        <div className="card shadow">
                            <div className="card-body text-center">

                                {/* HERO TEXT */}
                                <h1 className="card-title mb-4" style={{ color: '#0F4C75', fontWeight: '800' }}>
                                    Welcome to Blue Wave Car Wash
                                </h1>

                                <p className="lead mb-4" style={{ color: '#1B262C' }}>
                                    Your premium destination for professional car care and detailing services
                                </p>

                                {/* SERVICES INTRO */}
                                <div className="text-center mb-5">
                                    <h3 style={{ color: '#28A745', fontWeight: '700' }}>Our Services</h3>
                                    <p className="mb-4">
                                        We provide exceptional car washing and auto spa treatments to keep your vehicle looking its best
                                    </p>
                                </div>

                                {/* WHY CHOOSE US */}
                                <div className="text-center mb-5">
                                    <h3 style={{ color: '#17A2B8', fontWeight: '700' }}>Why Choose Blue Wave?</h3>

                                    <div className="row text-start mt-3">

                                        <div className="col-md-6 mb-3">
                                            <h5 style={{ color: '#3282B8', fontWeight: '600' }}>
                                                <i className="fas fa-star me-2"></i>
                                                Professional Excellence
                                            </h5>
                                            <p>
                                                Our experienced team delivers top-quality service with attention to every detail
                                            </p>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <h5 style={{ color: '#28A745', fontWeight: '600' }}>
                                                <i className="fas fa-shield-alt me-2"></i>
                                                Quality Products
                                            </h5>
                                            <p>
                                                We use only the finest products and equipment for lasting results
                                            </p>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <h5 style={{ color: '#FFC107', fontWeight: '600' }}>
                                                <i className="fas fa-clock me-2"></i>
                                                Quick Service
                                            </h5>
                                            <p>
                                                Fast, efficient service without compromising on quality
                                            </p>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <h5 style={{ color: '#17A2B8', fontWeight: '600' }}>
                                                <i className="fas fa-heart me-2"></i>
                                                Customer Satisfaction
                                            </h5>
                                            <p>
                                                Your satisfaction is our top priority with every visit
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* GALLERY */}
                                <div className="text-center mb-5">
                                    <h3 style={{ color: '#1B262C', fontWeight: '700' }}>Our Gallery</h3>
                                    <p className="mb-4">
                                        Browse through our showcase of beautifully transformed vehicles
                                    </p>

                                    <div className="row">

                                        <div className="col-md-4 mb-3">
                                            <div className="card h-100">
                                                <img
                                                    src="/immages/washerfluid.jpg"
                                                    className="card-img-top"
                                                    alt="Exterior Wash"
                                                />
                                                <div className="card-body">
                                                    <h6>Exterior Wash</h6>
                                                    <p className="small text-muted">
                                                        Complete exterior cleaning and polishing
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div className="card h-100">
                                                <img
                                                    src="/immages/soundinstallation.avif"
                                                    className="card-img-top"
                                                    alt="Interior Detailing"
                                                />
                                                <div className="card-body">
                                                    <h6>Interior Detailing</h6>
                                                    <p className="small text-muted">
                                                        Deep cleaning and conditioning
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div className="card h-100">
                                                <img
                                                    src="/immages/paintsealant.jpg"
                                                    className="card-img-top"
                                                    alt="Premium Wax"
                                                />
                                                <div className="card-body">
                                                    <h6>Premium Wax Treatment</h6>
                                                    <p className="small text-muted">
                                                        Long-lasting protection and shine
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="text-center mt-5">
                                    <button 
                                        className="btn btn-lg" 
                                        style={{ backgroundColor: '#3282B8', borderColor: '#3282B8', color: '#FFFFFF' }}
                                        onClick={() => navigate('/productsandservices')}
                                    >
                                        Purchase With Us Today
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <BeautifulFooter />
        </div>
    );
};

export default Home;
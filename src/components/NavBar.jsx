// import { Link, useNavigate } from "react-router-dom";
// const NavBar = () => {

//     const user = JSON.parse(localStorage.getItem("user"))

//     let navigator = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("user")
//         navigator("/signin")
//     }
//     return (
//         <nav className="navbar navbar-expand-lg">
//             <Link className="navbar-brand" to='/'>Warratek</Link>
//             <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarCollapse">
//                 <div className="navbar-nav">
//                     <Link className="nav-link" to='/'>Home</Link>
//                     {user !== null && user.role === "admin" ?(
//                         <Link className="nav-link" to='/addproducts'>Add Products</Link>)
//                     :("")} 
//                      <Link className="nav-link" to='/addproducts'>Add Products</Link>  
//                 </div>


//                 <div className="navbar-nav">
//                     {/* <Link className="nav-link" to='/furniture'>Furniture</Link>
//                     <Link className="nav-link" to='/cutlery'>Cutlery</Link>
//                     <Link className="nav-link" to='/beddings'>Beddings</Link>
//                     <Link className="nav-link" to='/decorators'>Decorators</Link>
//                     <Link className="nav-link" to='/machines'>Machines</Link> */}
//                 </div>

//                 {user ? (

//                     <div className="navbar-nav ms-auto">
//                         <Link className="nav-link" to="#">{user.user_name}</Link>
//                         <button className="btn nav-link" onClick={handleLogout}>Log Out</button>
//                     </div>
//                 ) : (
//                     <div className="navbar-nav ms-auto">
//                         <Link className="nav-link" to="/signin">Sign In</Link>
//                         <Link className="nav-link" to="/signup">Sign Up</Link>
//                     </div>)}

//             </div>
//         </nav>
//     );
// }

// export default NavBar;

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AutoGlowNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar" sticky="top">
            <Container>

                <Navbar.Brand href="/" className="brand-link">
                    <FaCarSide className="brand-icon" />
                    <span className="brand-name">Blue Wave</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>

                        <NavDropdown title="Our Services" id="services-dropdown">
                            <NavDropdown.Item href="#services">Car Wash</NavDropdown.Item>
                            <NavDropdown.Item href="#detailing">Detailing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#products">Our Products</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#contact">Contact Us</Nav.Link>

                        <Nav.Link href="#wishlist" className="icon-link">
                            <FaHeart />
                        </Nav.Link>

                        <Nav.Link href="#cart" className="icon-link">
                            <FaShoppingCart />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
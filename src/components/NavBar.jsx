import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    let navigator = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigator("/signin")
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to='/'>Warratek</Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link className="nav-link" to='/'>Home</Link>
                    {user !== null && user.role === "admin" ?(
                        <Link className="nav-link" to='/addproducts'>Add Products</Link>)
                    :("")}   
                </div>


                <div className="navbar-nav">
                    {/* <Link className="nav-link" to='/furniture'>Furniture</Link>
                    <Link className="nav-link" to='/cutlery'>Cutlery</Link>
                    <Link className="nav-link" to='/beddings'>Beddings</Link>
                    <Link className="nav-link" to='/decorators'>Decorators</Link>
                    <Link className="nav-link" to='/machines'>Machines</Link> */}
                </div>

                {user ? (

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="#">{user.user_name}</Link>
                        <button className="btn nav-link" onClick={handleLogout}>Log Out</button>
                    </div>
                ) : (
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </div>)}

            </div>
        </nav>
    );
}

export default NavBar;
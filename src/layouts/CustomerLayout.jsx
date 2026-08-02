import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import BeautifulFooter from "../components/footer";
import "../styles/layout.css";

function CustomerLayout() {

    return (

        <div className="dashboard-layout">

            <NavBar />

            <main className="dashboard-content">

                <Outlet />

            </main>

            <BeautifulFooter />

        </div>

    );

}

export default CustomerLayout;
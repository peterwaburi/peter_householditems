import { Outlet } from "react-router-dom";
import BeautifulFooter from "../components/footer";

const CustomerLayout = () => {
    return (
        <>
            <main className="min-vh-100">
                <Outlet />
            </main>
            <BeautifulFooter />
        </>
    );
};

export default CustomerLayout;
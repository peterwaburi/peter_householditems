import { Outlet } from "react-router-dom";
import BeautifulFooter from "../components/footer";

const PublicLayout = () => {
    return (
        <>
            <main className="min-vh-100">
                <Outlet />
            </main>

            <BeautifulFooter />
        </>
    );
};

export default PublicLayout;
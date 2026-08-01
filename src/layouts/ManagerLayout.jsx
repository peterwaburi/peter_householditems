import { Outlet } from "react-router-dom";

const ManagerLayout = () => {
    return (
        <main className="min-vh-100">
            <Outlet />
        </main>
    );
};

export default ManagerLayout;
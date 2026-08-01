import { Outlet } from "react-router-dom";

const WorkerLayout = () => {
    return (
        <main className="min-vh-100">
            <Outlet />
        </main>
    );
};

export default WorkerLayout;
import { useState } from "react";
import {
    Container,
    Table,
    Button,
    Alert
} from "react-bootstrap";

import ManagerNavbar from "./ManagerNavbar";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";
import ConfirmDialog from "./ConfirmDialog";
import SearchBar from "./SearchBar";

import useUsers from "../hooks/useUsers";

const ManagerWorkers = () => {

    const {
        users,
        loading,
        error,
        removeUser
    } = useUsers();

    const [search, setSearch] = useState("");
    const [selectedWorker, setSelectedWorker] =
        useState(null);
    const [deleting, setDeleting] =
        useState(false);

    const workers = users.filter((user) => {

        const role =
            String(user.role || "").toLowerCase();

        return role === "worker" ||
            role === "staff";

    });

    const filteredWorkers =
        workers.filter((worker) => {

            const text = [
                worker.first_name,
                worker.last_name,
                worker.username,
                worker.email,
                worker.phone
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );
        });

    const handleRemove = async () => {

        if (!selectedWorker) return;

        setDeleting(true);

        try {

            await removeUser(
                selectedWorker.id ??
                selectedWorker.user_id
            );

            setSelectedWorker(null);

        } catch (err) {

            console.error(
                "Unable to remove worker:",
                err
            );

        } finally {

            setDeleting(false);

        }
    };

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Workers
                    </h2>

                    <p className="text-muted">
                        Manage BlueWave workers and staff.
                    </p>

                </div>

                <div className="mb-3">

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search workers..."
                    />

                </div>

                {loading && (
                    <PageLoader
                        message="Loading workers..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading &&
                    !error &&
                    filteredWorkers.length === 0 && (

                    <EmptyState
                        title="No workers found"
                        message={
                            search
                                ? "No worker matches your search."
                                : "There are no workers registered."
                        }
                    />

                )}

                {!loading &&
                    !error &&
                    filteredWorkers.length > 0 && (

                    <div className="table-responsive">

                        <Table
                            hover
                            responsive
                            className="align-middle shadow-sm"
                        >

                            <thead className="table-dark">

                                <tr>

                                    <th>
                                        #
                                    </th>

                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Username
                                    </th>

                                    <th>
                                        Email
                                    </th>

                                    <th>
                                        Phone
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredWorkers.map(
                                    (worker, index) => {

                                        const id =
                                            worker.id ??
                                            worker.user_id ??
                                            index;

                                        return (

                                            <tr key={id}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    {
                                                        [
                                                            worker.first_name,
                                                            worker.last_name
                                                        ]
                                                            .filter(Boolean)
                                                            .join(" ") ||
                                                        worker.username ||
                                                        "Worker"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        worker.username ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        worker.email ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        worker.phone ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>

                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() =>
                                                            setSelectedWorker(
                                                                worker
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </Button>

                                                </td>

                                            </tr>

                                        );
                                    }
                                )}

                            </tbody>

                        </Table>

                    </div>

                )}

            </Container>

            <ConfirmDialog
                show={Boolean(selectedWorker)}
                title="Remove Worker"
                message="Are you sure you want to remove this worker?"
                confirmText={
                    deleting
                        ? "Removing..."
                        : "Remove Worker"
                }
                onConfirm={handleRemove}
                onCancel={() =>
                    !deleting &&
                    setSelectedWorker(null)
                }
            />

        </>
    );
};

export default ManagerWorkers;
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

const ManagerCustomers = () => {

    const {
        users,
        loading,
        error,
        removeUser
    } = useUsers();

    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] =
        useState(null);
    const [deleting, setDeleting] =
        useState(false);

    const customers = users.filter((user) => {

        const role =
            String(user.role || "").toLowerCase();

        return role === "customer" ||
            role === "user" ||
            !user.role;

    });

    const filteredCustomers =
        customers.filter((customer) => {

            const text = [
                customer.first_name,
                customer.last_name,
                customer.username,
                customer.email,
                customer.phone
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );
        });

    const handleDelete = async () => {

        if (!selectedUser) return;

        setDeleting(true);

        try {

            await removeUser(
                selectedUser.id ??
                selectedUser.user_id
            );

            setSelectedUser(null);

        } catch (err) {

            console.error(
                "Unable to remove customer:",
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
                        Customers
                    </h2>

                    <p className="text-muted">
                        View and manage registered customers.
                    </p>

                </div>

                <div className="mb-3">

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search customers..."
                    />

                </div>

                {loading && (
                    <PageLoader
                        message="Loading customers..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading &&
                    !error &&
                    filteredCustomers.length === 0 && (

                    <EmptyState
                        title="No customers found"
                        message={
                            search
                                ? "No customer matches your search."
                                : "There are no registered customers."
                        }
                    />

                )}

                {!loading &&
                    !error &&
                    filteredCustomers.length > 0 && (

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

                                {filteredCustomers.map(
                                    (customer, index) => {

                                        const id =
                                            customer.id ??
                                            customer.user_id ??
                                            index;

                                        return (

                                            <tr key={id}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    {
                                                        [
                                                            customer.first_name,
                                                            customer.last_name
                                                        ]
                                                            .filter(Boolean)
                                                            .join(" ") ||
                                                        customer.username ||
                                                        "Customer"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        customer.username ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        customer.email ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        customer.phone ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>

                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() =>
                                                            setSelectedUser(
                                                                customer
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
                show={Boolean(selectedUser)}
                title="Remove Customer"
                message="Are you sure you want to remove this customer?"
                confirmText={
                    deleting
                        ? "Removing..."
                        : "Remove Customer"
                }
                onConfirm={handleDelete}
                onCancel={() =>
                    !deleting &&
                    setSelectedUser(null)
                }
            />

        </>
    );
};

export default ManagerCustomers;
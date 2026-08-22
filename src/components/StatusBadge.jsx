import { Badge } from "react-bootstrap";

const StatusBadge = ({
    status
}) => {

    const value =
        String(
            status || "Pending"
        );

    const normalized =
        value.toLowerCase();

    let variant = "secondary";

    if (
        normalized === "completed" ||
        normalized === "approved" ||
        normalized === "active" ||
        normalized === "paid"
    ) {

        variant = "success";

    } else if (
        normalized === "pending" ||
        normalized === "processing"
    ) {

        variant = "warning";

    } else if (
        normalized === "cancelled" ||
        normalized === "canceled" ||
        normalized === "rejected" ||
        normalized === "failed"
    ) {

        variant = "danger";

    } else if (
        normalized === "confirmed" ||
        normalized === "assigned"
    ) {

        variant = "primary";

    }

    return (
        <Badge
            bg={variant}
        >
            {value}
        </Badge>
    );
};

export default StatusBadge;
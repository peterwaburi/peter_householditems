import {
    Badge,
    Button,
    Dropdown
} from "react-bootstrap";

import {
    FaBell
} from "react-icons/fa";

import useNotifications from "../hooks/useNotifications";

const NotificationBell = () => {

    const {
        notifications,
        unreadCount,
        loading,
        markAsRead
    } = useNotifications();

    return (

        <Dropdown align="end">

            <Dropdown.Toggle
                variant="link"
                className="position-relative text-decoration-none p-2"
                id="notification-dropdown"
            >

                <FaBell size={20} />

                {unreadCount > 0 && (

                    <Badge
                        bg="danger"
                        pill
                        className="position-absolute top-0 start-100 translate-middle"
                    >

                        {unreadCount > 99
                            ? "99+"
                            : unreadCount}

                    </Badge>

                )}

            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{
                    minWidth: "320px",
                    maxHeight: "400px",
                    overflowY: "auto"
                }}
            >

                <Dropdown.Header>

                    Notifications

                </Dropdown.Header>

                {loading && (

                    <Dropdown.Item disabled>

                        Loading...

                    </Dropdown.Item>

                )}

                {!loading &&
                    notifications.length === 0 && (

                    <Dropdown.Item disabled>

                        No notifications.

                    </Dropdown.Item>

                )}

                {!loading &&
                    notifications.map(
                        (notification, index) => {

                            const id =
                                notification.id ??
                                index;

                            const read =
                                notification.is_read ||
                                notification.read === true;

                            return (

                                <Dropdown.Item
                                    key={id}
                                    className={
                                        read
                                            ? ""
                                            : "fw-bold"
                                    }
                                    onClick={() => {

                                        if (!read) {
                                            markAsRead(id);
                                        }

                                    }}
                                >

                                    <div>

                                        <div>

                                            {
                                                notification.title ||
                                                "Notification"
                                            }

                                        </div>

                                        <small className="text-muted">

                                            {
                                                notification.message ||
                                                notification.description ||
                                                ""
                                            }

                                        </small>

                                    </div>

                                </Dropdown.Item>

                            );

                        }
                    )}

            </Dropdown.Menu>

        </Dropdown>
    );
};

export default NotificationBell;
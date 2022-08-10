import { React } from "react";
import Alert from "react-bootstrap/Alert";
import { useNotificationContext } from "../../../context/NotificationContext";

const Notification = ({ variant }) => {
    const {notification} = useNotificationContext();

    if (!notification.show) {
        return null;
    };

    return (
        <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
    );
}

export default Notification;
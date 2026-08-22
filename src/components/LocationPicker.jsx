import {
    useState
} from "react";

import {
    Form,
    Button,
    Alert
} from "react-bootstrap";

import {
    getCurrentLocation
} from "../api/location";

const LocationPicker = ({
    value,
    onChange
}) => {

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const useMyLocation = async () => {

        setLoading(true);
        setError("");

        try {

            const position =
                await getCurrentLocation();

            const location =
                `${position.latitude}, ${position.longitude}`;

            onChange({
                target: {
                    value: location
                }
            });

        } catch {

            setError(
                "Unable to get your current location. Please allow location access."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <Form.Group className="mb-3">

            <Form.Label>
                Service Location
            </Form.Label>

            <Form.Control
                value={value || ""}
                placeholder="Enter location or use your current location"
                onChange={onChange}
            />

            <Button
                type="button"
                variant="outline-primary"
                className="mt-2"
                onClick={useMyLocation}
                disabled={loading}
            >

                {loading
                    ? "Getting Location..."
                    : "Use My Location"}

            </Button>

            {error && (

                <Alert
                    variant="danger"
                    className="mt-2 mb-0"
                >
                    {error}
                </Alert>

            )}

        </Form.Group>
    );
};

export default LocationPicker;
import { Form } from "react-bootstrap";

const ServiceSelector = ({
    value,
    onChange,
    services = []
}) => {

    return (
        <Form.Group className="mb-3">

            <Form.Label>
                Select Service
            </Form.Label>

            <Form.Select
                value={value || ""}
                onChange={onChange}
                required
            >

                <option value="">
                    Choose a service
                </option>

                {services.map(
                    (service, index) => {

                        const id =
                            service.id ??
                            service.service_id ??
                            index;

                        const name =
                            service.service_name ??
                            service.name ??
                            service.title ??
                            "Service";

                        const price =
                            service.price ??
                            service.service_cost ??
                            service.cost;

                        return (

                            <option
                                key={id}
                                value={id}
                            >

                                {name}

                                {price !== undefined
                                    ? ` - KES ${price}`
                                    : ""}

                            </option>

                        );
                    }
                )}

            </Form.Select>

        </Form.Group>
    );
};

export default ServiceSelector;
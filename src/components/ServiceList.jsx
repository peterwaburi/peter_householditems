import {
    Row,
    Col,
    Alert
} from "react-bootstrap";

import useServices from "../hooks/useServices";

import ServiceCard from "./ServiceCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

const ServiceList = () => {

    const {
        services,
        loading,
        error
    } = useServices();

    if (loading) {

        return (
            <PageLoader
                message="Loading services..."
            />
        );

    }

    if (error) {

        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );

    }

    if (services.length === 0) {

        return (
            <EmptyState
                title="No services available"
                message="There are currently no services available."
            />
        );

    }

    return (
        <Row className="g-4">

            {services.map(
                (service, index) => (

                    <Col
                        key={
                            service.id ??
                            service.service_id ??
                            index
                        }
                        md={6}
                        lg={4}
                    >

                        <ServiceCard
                            service={service}
                        />

                    </Col>

                )
            )}

        </Row>
    );
};

export default ServiceList;
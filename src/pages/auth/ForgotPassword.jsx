import { Form, Button } from "react-bootstrap";
import AuthLayout from "../../components/AuthLayout";

function ForgotPassword() {

    return (

        <AuthLayout title="Forgot Password">

            <Form>

                <Form.Group className="mb-4">

                    <Form.Label>Email Address</Form.Label>

                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                    />

                </Form.Group>

                <Button
                    className="w-100"
                    size="lg"
                >
                    Send Reset Link
                </Button>

            </Form>

        </AuthLayout>

    );

}

export default ForgotPassword;
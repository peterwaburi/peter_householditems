import { Form, Button } from "react-bootstrap";
import AuthLayout from "../../components/AuthLayout";

function ResetPassword(){

    return(

        <AuthLayout title="Reset Password">

            <Form>

                <Form.Group className="mb-3">

                    <Form.Label>New Password</Form.Label>

                    <Form.Control type="password"/>

                </Form.Group>

                <Form.Group className="mb-4">

                    <Form.Label>Confirm Password</Form.Label>

                    <Form.Control type="password"/>

                </Form.Group>

                <Button
                    className="w-100"
                    size="lg"
                >
                    Update Password
                </Button>

            </Form>

        </AuthLayout>

    );

}

export default ResetPassword;
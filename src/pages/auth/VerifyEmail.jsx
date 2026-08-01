import { Button } from "react-bootstrap";
import AuthLayout from "../../components/AuthLayout";

function VerifyEmail(){

    return(

        <AuthLayout title="Verify Email">

            <p className="text-center mb-4">

                We've sent a verification email.
                Click the link in your inbox to activate your account.

            </p>

            <Button
                className="w-100"
            >
                Resend Verification Email
            </Button>

        </AuthLayout>

    );

}

export default VerifyEmail;
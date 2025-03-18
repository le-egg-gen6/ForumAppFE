import { Link } from "react-router-dom";
import ValidateForm from "../form/ValidateForm";
import AuthLayout from "../layout/AuthLayout";
import { Button } from "@/components/ui/button";

const ValidatePage = () => {
  return (
    <AuthLayout
      title="Verification Code"
      description="Please enter the 6-digit code sent to your device"
      footer={
        <div className="text-sm text-center space-y-2">
          <div>
            <Link to="/login" className="text-primary hover:underline">
              Back to login
            </Link>
          </div>
          <div>
            <Button variant="link" className="p-0 h-auto text-muted-foreground">
              Resend code
            </Button>
          </div>
        </div>
      }
    >
      <ValidateForm />
    </AuthLayout>
  );
};

export default ValidatePage;

import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../form/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create an Account"
      description="Enter your details to get started"
      footer={
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;

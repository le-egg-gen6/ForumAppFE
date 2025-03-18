import { Link } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import AuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to your account"
      footer={
        <div className="text-sm text-center space-y-2">
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
        </div>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

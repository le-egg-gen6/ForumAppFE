import LoadingScreen from "@/custom_components/side/LoadingScreen";
import { lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

const Loadable = (Component: LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  );
};

const LoginPage = Loadable(
  lazy(() => import("@/custom_components/page/LoginPage"))
);
const RegisterPage = Loadable(
  lazy(() => import("@/custom_components/page/RegisterPage"))
);
const ValidatePage = Loadable(
  lazy(() => import("@/custom_components/page/ValidatePage"))
)
const HomePage = Loadable(
  lazy(() => import("@/custom_components/page/HomePage"))
);
const NotFoundPage = Loadable(
  lazy(() => import("@/custom_components/page/NotFoundPage"))
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/homepage"} replace />} />
      <Route path="/homepage" index element={HomePage} />
      <Route path="/login" element={LoginPage} />
      <Route path="/register" element={RegisterPage} />
      <Route path="/validate" element={ValidatePage} />
      <Route path="/not-found" element={NotFoundPage} />
      <Route path="*" element={<Navigate to={"/not-found"} replace />} />
    </Routes>
  );
};

export default Router;

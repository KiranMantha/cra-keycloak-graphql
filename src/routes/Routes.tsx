import { ComponentType, ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

type RouteProps = {
  path: string;
  page: React.LazyExoticComponent<() => ReactElement>;
  isSecurePage: boolean;
};

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const routes: RouteProps[] = [
  {
    path: "/",
    page: Home,
    isSecurePage: false,
  },
  {
    path: "/about",
    page: About,
    isSecurePage: true,
  },
];

const FallbackPage = () => <>Loading..</>;

const withSuspense = (Component: ComponentType, isSecurePage: boolean) => {
  return (
    <Suspense fallback={<FallbackPage />}>
      {isSecurePage ? (
        <PrivateRoute>
          <Component />
        </PrivateRoute>
      ) : (
        <Component />
      )}
    </Suspense>
  );
};

export function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, page, isSecurePage }) => (
        <Route
          key={path}
          path={path}
          element={withSuspense(page, isSecurePage)}
        />
      ))}
    </Routes>
  );
}

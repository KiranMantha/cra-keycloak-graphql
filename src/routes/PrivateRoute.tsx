import { useKeycloak } from "@react-keycloak/web";
import { ReactNode } from "react";

export function PrivateRoute({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  return isLoggedIn ? <>{children}</> : <p>Please login to view this page.</p>;
}

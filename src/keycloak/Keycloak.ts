import Keycloak from "keycloak-js";
import { config } from "@config";

const { REACT_APP_KEYCLOAK_SERVER_URL, REACT_APP_KEYCLOAK_REALM_NAME, REACT_APP_KEYCLOAK_CLIENT_ID } = config;

const keycloak = new Keycloak({
 url: REACT_APP_KEYCLOAK_SERVER_URL,
 realm: REACT_APP_KEYCLOAK_REALM_NAME,
 clientId: REACT_APP_KEYCLOAK_CLIENT_ID,
});

export { keycloak };
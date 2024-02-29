import { useKeycloak } from "@react-keycloak/web";
import { NavLink } from "react-router-dom";

export function Nav() {
  const { keycloak } = useKeycloak();
  return (
    <div>
      <div className="top-0 w-full flex flex-wrap">
        <section className="x-auto">
          <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <h1 className="text-3xl font-bold font-heading">
                Keycloak React AUTH.
              </h1>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <NavLink className="hover:text-blue-800" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-blue-800" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <button onClick={() => keycloak.login()}>Login</button>
                </li>
                <li>
                  <button onClick={() => keycloak.logout()}>Logout</button>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

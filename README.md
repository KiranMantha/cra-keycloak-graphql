# cra-keycloak-graphql
a sample react app with keycloak and graphql

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Keycloak setup

- install docker
- in order to run keycloak in a docker container, run the below command: 
`docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev`
- the above command will pull latest keycloak and run it on `localhost:8080`
- once the container is created, we can run it from docker desktop containers from next time. this will also prevent unnecessary container duplications.
- navigate to above localhost and navigate to administration console and login as admin.

### Create realm

- create a realm from `master` dropdown with name `keycloak-react-auth`

### Create client

- A realm can have multiple clients. frontend application needs a client along with realm to perform login actions.
- To create a `client`, navigate to above realm from master dropdown.
- click on `Clients` in side navigation and click on `Create client`. This opens a wizard:
    * in 1st step, provide `Client id: <hyphen-delimited-value> (in our case, React-auth)`
    * keep defaults in next steps and create client.


- after client creation, navigate to `Settings` tab in above realm and set below things in `Access Settings` section:
    * `Valid redirect URIs: <frontend-application-protected-url> (in our case localhost:3000/about)`
    * `Valid post logout redirect URIs: <frontend-application-default-url> (in our case localhost:3000/home)`
    * `Web origins: <frontend-application-url> (in our case localhost:3000)`

### Create client roles

- Each client can contain different roles which are assigned to different users. these are more like permissions that a user can have.
- to create a role: navigate to `Roles` tab in above client and click on `Create Role`. provide a hyphen-seperated value

### Create realm roles

- Realm roles are super set of client roles. A realm role can contain multiple client roles. 
- To create a realm role, navigate to above realm.
- click on `Realm roles` in side bar navigation and click on `Create role`. 
- provide a hypen-seperated role name and save.
- to assign client roles to a given realm role, navigate to above role from the list of realm roles. 
    * click on `Action` dropdown in top-right corner and click on `Add associated roles`
    * this opens a modal dialog with filter dropdown, search and list of roles
    * click on filter and select `Filter by clients`. this should show our client role which we created above along with defaults.
    * select our new client role and save.
- With this, we created a realm role and assigned some client roles to it.

### Create a user

- A user in keycloak is associated to realm role which in turn have specific set of permissions (client roles). 
- To create a user, navigate to above realm and click on `Users` in side bar navigation.
- Click on `Add user`. provide `username`, `first name`, `last name` and ignore email verified. save user.

#### Setting password
- To set up password for new user, navigate to new user from users list.
- navigate to `Credentials` tab and add password

#### Setting realm role
- To set a realm role, navigate to new user from users list. 
- navigate to `Role mapping` tab and click on `Assign role`
- this opens a modal dialog with our realm role aloong with other default realm roles. select our realm role and save.
- with this, we created the user with specific role which has specific permissions.



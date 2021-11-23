# Address Book App
I ran out of time to work on the App. Because of this the unit testing is lacking. This could be flushed out in the future to include:
* Testing the detailed component to validate that it is loading the correct data
* Changing the RANDOM_USER_URL to validate that error messages are displaying

### Overall Approach
I decided to use React with functional typescript components. I used react-router-dom to setup routing to the detail page. It currently is not being utilized, but the routing is there for future work when the user just wants to navigate to the detail page without selecting a user first. 
I implemented the list/detail view in One page with react material data grid and cards. 
For deploying to Kubernetes I utilized the package runtime-env-cra which allows for setting up ENV variables in HELM for the specific environment.

### Given More Time
I would have flushed out the unit tests I mentioned above.
I would have implemented a menu and seperated out the List view from the Detail view. This would allow me to navigate directly to the detail view with the id of the user.
I would have added error messaging for the API call
I would have made it look much much better.

## Routing
I added routing to the app because the User might want to navigate directly to the detail page without having to load the users.

## Production Build
For production builds we are use runtime-env-cra which allows for the setting of environment variables in kubernetes using helm. I currently use the js file runtime-env.js to populate dev/prod/qa variables. When deploying just set the environment variable in helm to the correct one, and the runtime-env-cra will pick it up. 

## Material UI
I am using material UI for the grid and cards. More work is needed in the grid to hook up paging for the API.

## Installation
Run npm install in the project root directory.

## Usage
Open chrome and navigate to http://localhost:3000/. click on one of the users in the grid to see the user details populated. 
First run npm run start

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Click on any of the users and the detail information will load. Notice the URL changes. This could be utilized in the future for navigating directly to the detail page.


### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run  build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


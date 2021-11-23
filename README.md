# Address Book App
I ran out of time to work on the App. Because of this the unit testing is lacking. This could be flushed out in the future to include:
* Testing the detailed component to validate that it is loading the correct data
* Changing the RANDOM_USER_URL to validate that error messages are displaying

## Routing
I added routing to the app because the User might want to navigate directly to the detail page without having to load the users.

## Material UI
I am using material UI for the grid and cards. More work is needed in the grid to hook up paging for the API.

## Installation
Run npm install in the project root directory.


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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

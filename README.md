# eCommerce App

This is a responsive front-end application built in React.

## App Overview

This project was built in React. The app focuses on allowing users to choose between several t-shirt sizes for female clothing and based on the information, options are displayed. Using the useEffect Hook and Fetch API, data is collected from an external JSON file and incorporated into the application. 

To start you can simply [download](https://github.com/sharvin3007/eCommerce-App/archive/master.zip) the boilerplate and unzip it into your working directory. You can also clone if you wish to contribute.

## Technology

* React (v.18.2.0)
* Bootstrap (v.5.2.0)

## Usage

In the project directory, you can start by running:

### `npm install`

This is to ensure all dependencies are downloaded. 
After a fresh clone, there is likely to be no `node_modules` since that is `.gitignore`'d.

Alternately, if `node_modules` exists, remove it with `rm -rf node_modules` and then run `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Testing

Component tests have been written in Cypress.
```
# Open Cypress component testing interactive UI mode
npm run test:component:ui

# Run all Cypress component testing suites
npm run test:component
```

## Linting

ESLint is used to lint the application code. 
```
# Run Linter
npm run lint

# Auto-Fix ESLint Issues
npm run lint:fix
```

## Contributing

Suggestions or pull requests are welcome.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

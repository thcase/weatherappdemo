# Weather App Demo
![Build](https://github.com/thcase/weatherappdemo/actions/workflows/node.js.yml/badge.svg)

## Introduction
This application is provides a learning and demonstration environment for using a React Single Page App (SPA).  It will utilize the following technologies:

* React.js - SPA Framework
* Node.js -- Used for NPM Scripts and underlying technology dependent for using React.js 
* Create-React-App -- used to bootstrap the initial application
* OpenWeatherMap.org -- Weather API used (one will need to setup an account and should use Free Tier Plan)
* Google Maps API -- Used for GeoLocation (one will need to have an account, setup a project, and create an API Key)
* GitHub -- Remote Source Repository, Issues Management, Continuous Integration/Continuous Deployment (CI/CD)
* Digital Ocean -- Sample Running version of Application (one will need to setup their own Digital Ocean account)
* Docker Desktop -- Used to build a containerized version of the application

The initial demo application will provide the following features:

* Provide Search Functionality to be able to enter a City, or an Address, to find the weather for the entered location
* Display the current weather for the location
* Display the weather forecasts for the location (hourly forecast for 48 hours, and daily forecast for next 7 days)

## Prerequisites
In order to get started, you will need the following installed:

* Node.JS - You can get latest at: https://nodejs.org/
* Create-React-App - You can install by following the instructions at: https://create-react-app.dev/docs/getting-started#quick-start
* A Javascript IDE - For this demo project the following IDE's will be configured:
    * Visual Studio Code
    * JetBrains Webstorm
* Git - Source Control Software used for the project
* Optionally: GitHub Account -- If you want to fork the project to run your own version
* Optionally: Docker Desktop -- If you want to run the build and run the demo application in a container
* Optionally: Cloud Host (such as Digital Ocean) -- If you want to demo the application beyond your desktop
    
## Project Setup
To set up the project, perform the following steps:

1. Open a Terminal (CommandLine Prompt, or Powershell Window)
2. Change directory to the parent folder where you want to host your project (e.g., ~/Projects or %UserProfile%/Projects)
3. Clone the project from the project source using Git clone command
4. Setup OpenWeatherMap account and create an API Key (see: https://openweathermap.org/appid)
5. Setup Google Maps API Key (see: https://developers.google.com/maps/documentation/embed/get-api-key)
6. Create a `.env` file in the project root to store the api keys (see: https://create-react-app.dev/docs/adding-custom-environment-variables/)
7. Run `npm install` or `yarn install` to install the node packages.  You will need to run `npm install` in order to perform docker builds since the build script depends on a package-lock.json file.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Building the Application
To build the application locally, you can run:

### 'yarn build' or `npm build`
(See [Available Scripts Section](#available-scripts) for information)

### `docker build .`
This will build a docker container for the project.  Use the `-t <tagname>` option prior to period to tag the built image.  Note:  If you are using Yarn for package manager, in order to run Docker build, you will need to run `npm install` to create the package-lock.json file.  Support for building Docker images with Yarn may be added at future date.  

To run the container, you will need to provide the two API keys as environment variables.  Below is a sample command for building and running locally.

```shell
docker build . -t weatherappdemo
docker run -d --env GOOGLE_MAP_API_KEY=<provide key> --env WEATHER_API_KEY=<provide key> -p 80:3000 weatherappdemo
```

### CI/CD
If you have a GitHub account, then you can set up Git Actions to build tha application on pushing to your main branch or merging of a pull request.  You should use the Node.js workflow. See the `.github\workflow` folder for sample github action.

## Deployment
If you are deploying to a cloud provider, then follow their deployment directions.  Below are some links to aid in deploying the application:

* [How to Deploy a Static Website to the Cloud with Digital Ocean App Platform](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-static-website-to-the-cloud-with-digitalocean-app-platform)
* [Deploy to Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=platform-linux#deploy-to-azure)
* [Deploy a Node.js App to AWS](https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/)
* [Building a Node.js App on App Engine (Google Cloud)](https://cloud.google.com/appengine/docs/standard/nodejs/building-app)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

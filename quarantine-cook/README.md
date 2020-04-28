# Quarantine Cook

You can find the deployed project at https://quarantine-cook.com.

## Contributors

Armando Roman (https://github.com/armandoroman1016)
[<img src="https://avatars3.githubusercontent.com/u/51098659?s=400&v=4" width = "200" />](https://avatars3.githubusercontent.com/u/51098659?s=400&v=4)
<br>
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/armandoroman1016)
<br>
[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/armando-roman-64a53a188/)  

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview
Quarantine Cook is a web app that will give your recipes based on your available ingredients, eleminating unnecessary grocery store trips.


### Key Features

- On demand recipes - enter your ingredients and get instantly matched to recipes.

## Tech Stack

### Front end built using:

#### React

- React is a fantastic choice for building dynamic, interactive UIs. React allows us to meet the platform's needs efficiently, and helps keep everything organized behind the scenes.
- As a user in todays world the speed at which receive our data is critical. The speed of unmounting and mounting components that react gives us help us acheive this.


#### Sass/SCSS

- Nested CSS is a must when styling your application. SCSS not only allows us as developers to write CSS quickly, but also creates an intuitive flow for later revisions. Add in variables, mixins, and functions, and CSS (arguably) is elevated to a production level.

#### Axios

- Axios is the industry-standard library for HTTP requests in Javascript. It provides a simple, readable syntax.

#### React Router

- Single page applications have special needs, particularly when it comes to routing the user from page-to-page. React router allows for the easy transport of the site's users whilst retaining SPA functionality. And with the new React Router hooks, we can do all of this inside of the functional programming paradigm.

#### Front end deployed to Netlify

# APIs
Recipe - Food - Nurtrition by Spoonacular

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_RECIPES_API_HOST - host name url (can be found here https://rapidapi.com/spoonacular/api/recipe-food-nutrition/details)
    *  REACT_APP_RECIPES_API_KEY - this is they key needed to make requests to the api that responds with the recipe data (can be found here https://rapidapi.com/spoonacular/api/recipe-food-nutrition/details)


# Installation Instructions

Clone this repo into your local, and run `yarn` to install your dependencies.

## Other Scripts

    * build - `yarn build`
    * start - `yarn start`
    * test - `yarn test`

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

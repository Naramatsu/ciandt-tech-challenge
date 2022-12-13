# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and Run

Please copy and paste this line https://github.com/Naramatsu/challenge-jonathan-narvaez.git
in a git bash console in your desktop
and add a `.env` file with the follow variable:
`REACT_APP_POKEMON_API=https://pokeapi.co/api/v2`
Then `npm i` and `npm start`
Enjoy the pokedex app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# CI&T Tech Challenge

Hello, we're excited that you've made this far, we are providing you a boilerplate for the technical challenge.
We've added some dependencies like: React, Redux and Material-ui, but the last one you're free to use
any UI library that you're comfortable with. Please, write all of your code in English.

## Submission Instructions

- Clone the repository.
- Make your changes.
- Send us the repo URL after you're finished.

## Problem description:

Build a Pokedex application using React and Poke API (https://pokeapi.co/). A Pokedex is an
indexer for pokemons containing the description of each pokemon and its attributes. The API
you will consume is the Pokémon API which can be found in this link: https://pokeapi.co/

**The user should be able to search and filter by Pokemons and the Pokemon should have a details page.**

While not required, it would be great if the application allowed:

- Users to compare Pokemons, attributes, etc. and/or included elements like charts to visualize
  some data.
- Also be able to add Pokemons to a “favorites” list and filter by only favorite Pokemons.

You will have two days to complete the challenge, but you can deliver the challenge before
the deadline. You can use create-react-app to get started and design the visual layout as you’d
like.

## Guidelines (What we’re looking for):

- We will evaluate the way you structure and write your code—from the standards you use
  to how you name your functions and structure your folders. We’re looking for consistency
  and human-readable code.
- We want to see your process (i.e., how often you commit your changes, the clarity of
  your commit messages, whether you break large tasks into smaller ones, etc.). Please
  do not make a single commit with two weeks’ worth of changes.
- We expect to be able to run your code locally on our machines. Please ensure you
  include any environment variables necessary to clone and start up your application.
- We expect a detailed README.md file outlining steps on how to run your project (feel free to overwite this one).
- We will also test the usability of your application from a UX perspective, so please
  ensure your application runs properly.
- We don’t require that you write in Typescript—this is optional. Plain JavaScript is fine.
  But if you do opt to write in Typescript, don’t type everything as any.

## Suggestions:

- Plot charts with the Pokemons attributes (our suggestion is https://www.amcharts.com/)
- Create a comparison table between the Pokemon attributes (our suggestion is
  https://www.ag-grid.com/ sorting, reordering, etc…)
- Unit tests using https://testing-library.com/docs/react-testing-library/intro/ and jest
- Any knowledge in automated tests software (cypress, webdriver I/O, selenium)

Go Catch ’Em All!! Pokemon trainer

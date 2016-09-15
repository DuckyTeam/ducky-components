# Ducky components

## Overview
Basic React components used to create www.ducky.no

## Install
- Have the latest version of [Node](https://nodejs.org/en/)
- Clone the repo
- Install dependencies with `npm install`
- Install storybook with `sudo npm install -g getstorybook`

## Running the project
- Run the development server with `npm run storybook`
- Open `localhost:6006`

## Project structure
Create a component folder in `common` with `index.js` and `styles.css` files. Each component is to be developed as a function or a class if required.
Preview the component in `preview\App.js`.

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript.
You can also compose classes together, also from other files.
These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).
To turn off CSS Modules remove it from the `webpack.config.js` file.

### Babel
Both Node server and frontend code runs with Babel.

### Linting
Run `npm run lint` to verify all files. With Atom you can install the `linter` package, then `linter-eslint` for error highlighting.
I would recommend installing `language-babel` package too for syntax highlighting

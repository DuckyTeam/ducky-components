# Ducky components

## Overview
React components used to create wwww.ducky.no

## Install
- Clone the repo
- `npm install`
- `git checkout development` , we use the development branch when developing
- `npm link` , makes the project linkable
- Go to ducky-web project and `npm link ducky-components`

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript.
You can also compose classes together, also from other files.
These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).
To turn off CSS Modules remove it from the `webpack.config.js` file.

### Babel
Both Node server and frontend code runs with Babel.

### Linting
`npm run lint`
All code is linted. With atom you install the `linter` package, then `linter-eslint`. You are covered.
Also run `npm run eslint` to verify all files.
I would recommend installing `language-babel` package too for syntax highlighting

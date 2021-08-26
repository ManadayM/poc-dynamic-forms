# Setup

This POC requires Node v10 and Angular v7. Usage of `Node Version Manager (nvm)` is recommended to avoid causing conflicts with your latest projects.

1. `nvm use` to set required node runtime version as set inside `.nvmrc` file.
2. `npm install` to install dependencies.

# Running on local

1. `npm start` - This will start frontend form builder and renderer application. Check http://localhost:4200.
2. `npm run mock-api` - This will start mock api server. Any data you generate will be saved inside `mock-api/db.json` file.

# CitFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

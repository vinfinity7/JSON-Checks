# React + Vite

An in-browser code editor that allows you to validate your JSON schema against draft 2020-12 and check if it is of type Array with item types numbers.

# Technologies Used

## AJV (Another JSON Schema Validator)

AJV is a JSON Schema validator for both browser and Node.js environments. It supports draft-04/06/07 of JSON Schema specifications and provides a rich set of features for validating JSON data against schemas. In this project, AJV is used to validate JSON schemas entered into the code editor against the draft 2020-12 specification.

## Monaco Editor

Monaco Editor is a versatile code editor that powers many popular development tools, including Visual Studio Code. It provides features like syntax highlighting, code completion, and error checking. In this project, Monaco Editor is used to allow users to input JSON schemas and view validation results directly within the browser.

## React Router

React Router is a popular routing library for React applications. It enables navigation and routing functionality, allowing users to navigate between different views/components in a single-page application. In this project, React Router is used to define routes for different pages/views, such as the home page and a secondary page. It enables users to navigate between these pages while preserving the state of the application.

## Run Locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

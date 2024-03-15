<div align="center" >
[![Netlify Status](https://api.netlify.com/api/v1/badges/65e5b158-7480-43d9-bcbf-1073fa16f85f/deploy-status)](https://app.netlify.com/sites/superb-brigadeiros-3988a1/deploys)
![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)
  
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate%20Now-brightgreen)](https://www.buymeacoffee.com/vinfinity7)
[![GitHub](https://img.shields.io/github/followers/vinfinity7?label=Follow%20%40vinfinity7&style=social)](https://github.com/vinfinity7)
</div>

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
```


##### If you wish to see some exemplar JSON SCHEMAS, you can check out [Schemas-Draft](src/schema/schemasdraft.md).


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App.js";
import { ChakraProvider } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import PageNotFound from "./components/page404.js";



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/">
      <Routes>
      <Route exact path="/" element={<Welcome />} />
      </Routes>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

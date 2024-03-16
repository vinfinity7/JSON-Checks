import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App.js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import PageNotFound from "./components/page404.js";



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/">
     {/* <Box h='100vh' overflowY='hidden' > */}
      <Routes>
      <Route exact path="/" element={<Welcome />} />
      </Routes>
        <App />
     {/* </Box> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

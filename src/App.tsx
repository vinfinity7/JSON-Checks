import { Box, Flex, VStack } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Heading from "./components/Heading";
import CustomBreadcrumb from "./components/CustomBd";
import ReleaseNotes from "./components/Text-Holds";
import TextSupport from "./components/Text-Holder2";
import { Navigate, Route, Routes } from "react-router";
// import Welcome from "./components/Welcome";

function App() {
  return (

    <Box minH="100vh" bg="#ffffff" color="black">
      <Heading h1="Validate Your JSON!" h2="Check its Array Type" />
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "50%" }}
          h="90vh"
          display="flex"
          flexDirection="column"
          border="1px solid black"
          borderRadius="md"
        >
          <VStack flex="1">
            <Box overflowY="auto" h="80vh" overflowX="auto">
              <Routes>
                <Route exact path="/page1" element={<ReleaseNotes />} />
                <Route exact path="/page2" element={<TextSupport />} />
              </Routes>
            </Box>
            <CustomBreadcrumb />
          </VStack>
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <CodeEditor />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

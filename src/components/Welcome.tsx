import { Box, Button, VStack } from "@chakra-ui/react";
import Heading from "./Heading";
// import { ArrowForwardIcon } from "@chakra-ui/icons";
import MyButton from "./Mybutton";

function Welcome() {
  return (
    <Box
      minH="100vh"
      bg="#ffffff"
      color="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Box ml={2}>

        <Heading  h1="WELCOME TO JSON VALIDATOR" h2="and Array Checker" />
        </Box>
        <MyButton/>
      </VStack>
    </Box>
  );
}

export default Welcome;

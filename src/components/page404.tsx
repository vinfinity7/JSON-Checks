import { Box} from "@chakra-ui/react";
import Heading from "./Heading";
// import { ArrowForwardIcon } from "@chakra-ui/icons";


function PageNotFound() {
  return (
    <Box
      minH="100vh"
      bg="#ffffff"
      color="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        <Heading h1="ERORRRRRRRRRR" h2="404" />     
    </Box>
  );
}

export default PageNotFound;

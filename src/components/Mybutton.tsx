import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function MyButton() {
  return (
    <Link to="/page1">
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="black"
        variant="outline"
      >
        Start
      </Button>
    </Link>
  );
}

export default MyButton;

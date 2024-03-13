import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MyButton() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        window.location.href = "/page1";
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  return (
    <Button
      as={Link}
      to="#"
      rightIcon={<ArrowForwardIcon />}
      colorScheme="black"
      variant="outline"
      onClick={() => setIsClicked(true)}
      style={{ transition: "opacity 2s", opacity: isClicked ? 0 : 1 }}
    >
      Start
    </Button>
  );
}

export default MyButton;

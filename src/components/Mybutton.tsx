import { Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Kbd } from "@chakra-ui/react";

function MyButton() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const opacity = 1 - (scrollPosition / maxScroll);
      setOpacity(opacity);

      if (scrollPosition > maxScroll ) {
        window.location.href = "/page1";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      as={Link}
      to="/page1"
      colorScheme="black"
      variant="outline"
      style={{ transition: "opacity 0.5s", opacity }}
    >
      <span>
        <Kbd>Scroll</Kbd> + <Kbd>Down</Kbd>
      </span>
      <Icon as={ArrowForwardIcon} transform="rotate(90deg)" ml={2} />
    </Button>
  );
}

export default MyButton;

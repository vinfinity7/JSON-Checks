import { chakra, Box, Stack, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Heading({h1,h2}) {
  return (
    <Flex   
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
      >
        <SimpleGrid
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          alignItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx="auto"
          display={{ lg: "flex" }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="blue.900"
              _dark={{ color: "blue.600" }}
              mb={6}
            >
                <chakra.span >{h1}&nbsp;&nbsp; </chakra.span>
              <chakra.span
                color="blue.600"
                _dark={{ color: "blue.900" }}
              >
                {h2}
              </chakra.span>
            </chakra.h2>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

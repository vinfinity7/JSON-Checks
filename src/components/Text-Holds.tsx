import { Box, Heading, Text } from "@chakra-ui/react";

const ReleaseNotes = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>2020-12 Release Notes</Heading>
      <Text mb={4}>
        The previous draft (2019-09) introduced a lot of new concepts including $recursiveRef/$recursiveAnchor, unevaluatedProperties/unevaluatedItems, vocabularies, and more. Since then, these new features have seen multiple implementations and usage in real schemas. This draft is mostly dedicated to changes related to applying the lessons we've learned about implementing and using these new features in the wild.
      </Text>
      <Heading as="h2" size="md" mb={2}>Changes to items and additionalItems</Heading>
      <Text mb={4}>
        The keywords used for defining arrays and tuples have been redesigned to help lower the learning curve for JSON Schema. Since the items keyword was used for both types, we would often see people mistakenly defining a tuple when they meant to define an array and not understand why only the first item in the array was validating.
      </Text>
      <Text mb={4}>
        The items and additionalItems keywords have been replaced with prefixItems and items where prefixItems has the same functionality as the array-of-schemas for of the old items and the new items keyword has the same functionality as the old additionalItems keyword.
      </Text>
      <Text mb={4}>
        Although the meaning of items has changed, the syntax for defining arrays remains the same. Only the syntax for defining tuples has changed. The idea is that an array has items (items) and optionally has some positionally defined items that come before the normal items (prefixItems).
      </Text>
    </Box>
  );
};

export default ReleaseNotes;

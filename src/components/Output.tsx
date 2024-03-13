import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import { CODE_SNIPPETS } from "../constants";

const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

const Output = ({
  editorRef,
  value,
  setValue,
  isValidSchema,
  setIsValidSchema,
}) => {
  const toast = useToast();
  const [output, setOutput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPass, setisPass] = useState(false);

  const handleButtonClick = () => {
    if (isValidSchema) {
      checkArray();
    } else {
      runCode();
    }
  };

  const checkArray = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      const jsonData = JSON.parse(sourceCode);
      delete jsonData["$schema"];
      delete jsonData["$id"];
      console.log(jsonData);

      // TESTCASES DEFINED
      let passCounter = 0;

      const input1 = [1, 2, 3, 4, 5];
      const isValid1 = ajvInstance.validate(jsonData, input1);
      if (isValid1) passCounter++;

      const input2 = ["d"];
      const isValid2 = ajvInstance.validate(jsonData, input2);
      if (!isValid2) passCounter++;

      const input3 = ["one", "two", "three"];
      const isValid3 = ajvInstance.validate(jsonData, input3);
      if (!isValid3) passCounter++;

      const input4 = [1, "two", 3, "four"];
      const isValid4 = ajvInstance.validate(jsonData, input4);
      if (!isValid4) passCounter++;

      const input5 = [1, 2, 3, "extra"];
      const isValid5 = ajvInstance.validate(jsonData, input5);
      if (!isValid5) passCounter++;

      if (passCounter === 5) {
        setOutput("JSON schema defines an array with items of type number.");
        setIsError(false);
        setisPass(true);
      } else {
        setisPass(false);
        setIsError(true);
        setOutput(
          "JSON schema does not define an array with items of type number."
        );
      }
    } catch (error) {
      console.error(error);
      setOutput("ERROR");
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 3000,
      });
    }
  };
  const handleReset = () => {
    setOutput("");
    setIsError(false);
    setisPass(false);
    setIsValidSchema(false);
    setValue(CODE_SNIPPETS["json"]);
  };
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      const jsonData = JSON.parse(sourceCode);
      delete jsonData["$schema"];
      delete jsonData["$id"];

      const valid = ajvInstance.validateSchema(jsonData);

      if (valid) {
        setOutput("JSON is valid against the schema draft 2020-12.");
        setIsError(false);
        setIsValidSchema(true);
        setisPass(true);
      } else {
        setIsValidSchema(false);
        setisPass(false);
        setIsError(true);
        setOutput("JSON is not valid against the schema draft 2020-12.");
      }
    } catch (error) {
      setisPass(false);
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 3000,
      });

      setIsValidSchema(false);
    }
  };

  return (
    <Box w="100%">
      <Button colorScheme="green" size="xs" onClick={handleButtonClick}>
        {isValidSchema ? "Check Array Functionality" : "Test Validity"}
      </Button>
      <Button colorScheme="blue" onClick={handleReset} size="xs" mx={1}>
        Reset
      </Button>
      <Box
        height="25vh"
        mt={2}
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : isPass ? "green.200" : "#333"}
      >
        {output ? (
          <Text>{output}</Text>
        ) : (
          <Text> Click "Run Code" to see the output here</Text>
        )}
      </Box>
    </Box>
  );
};

export default Output;

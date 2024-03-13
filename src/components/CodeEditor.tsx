import { useRef, useState } from "react";
import { Box, Text,Button, VStack, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("json");
  const [isValidSchema, setIsValidSchema] = useState(false);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleChange = (value) => {
    setValue(value);
    setIsValidSchema(false);
  };


  return (
    <Box>
      <VStack>
        <Box w="100%">
          <Box border="1px solid gray" borderRadius="md" pt={4}>
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
                wordWrap: "on",
              }}
              height="55vh"
              theme="tomorrow-night-bright"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={handleChange}
            />
          </Box>

        </Box>
        <Output
          editorRef={editorRef}
          value={value}
          isValidSchema={isValidSchema}
          setIsValidSchema={setIsValidSchema}
          setValue={setValue}
        />
      </VStack>
    </Box>
  );
};
export default CodeEditor;

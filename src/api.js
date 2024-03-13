import compiledSchema from "../src/schema/validator";
export const executeCode = async (sourceCode) => {
  const response = await compiledSchema(sourceCode);
  return response.data;
};

export const CODE_SNIPPETS = {
  json: `{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/schemas/product-schema.json",
    "type": "object",
    "properties": {
      "productId": {
        "type": "string",
        "pattern": "^[a-zA-Z0-9]{6}$"
      },
      "name": {
        "type": "string"
      },
      "price": {
        "type": "number",
        "minimum": 0
      },
      "category": {
        "type": "string",
        "enum": ["Electronics", "Clothing", "Books", "Toys"]
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "description": {
        "type": "string"
      }
    },
    "required": ["productId", "name", "price", "category"]
  }
  `,
};


### Example Schema 1: Array with Mixed Types

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/schemas/product-schema.json",
  "type": "array",
  "items": {
    "anyOf": [
      { "type": "integer" },
      {
        "type": "array",
        "items": { "type": "integer" }
      }
    ]
  }
}
```

This schema defines an array where each item can either be an integer or an array of integers.

### Example Schema 2: Array of Integers

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/schemas/product-schema.json",
  "type": "array",
  "items": { "type": "integer" }
}
```

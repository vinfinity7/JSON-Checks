const testCases = [
  {
    testCase: "Valid Product",
    data: {
      productId: "ABC123",
      name: "Smartphone",
      price: 499.99,
      category: "Electronics",
      tags: ["phone", "tech"],
      description: "A high-quality smartphone with advanced features.",
    },
  },
  {
    testCase: "Missing Namse",
    data: {
      price: 899.99,
      category: "Electronics",
      tags: ["computer", "tech"],
      description: "A powerful laptop for productivity.",
    },
  },
  {
    testCase: "Invalid Product ID",
    data: {
      productId: "12345",
      name: "Headphones",
      price: 59.99,
      category: "Electronics",
      tags: ["audio", "music"],
      description: "High-quality headphones for immersive sound.",
    },
  },
  {
    testCase: "Negative Price",
    data: {
      productId: "XYZ456",
      name: "T-shirt",
      price: -19.99,
      category: "Clothing",
      tags: ["apparel", "fashion"],
      description: "A comfortable t-shirt for everyday wear.",
    },
  },
  {
    testCase: "Invalid Category",
    data: {
      productId: "DEF789",
      name: "Board Game",
      price: 29.99,
      category: "Toys & Games",
      tags: ["family", "entertainment"],
      description: "A fun board game for all ages.",
    },
  },
  {
    testCase: "Non-string Tag",
    data: {
      productId: "GHI101",
      name: "Book",
      price: 12.99,
      category: "Books",
      tags: ["fiction", 123],
      description: "A captivating novel by a renowned author.",
    },
  },
  {
    testCase: "Missing Description",
    data: {
      productId: "JKL202",
      name: "Coffee Mug",
      price: 9.99,
      category: "Home & Kitchen",
      tags: ["drinkware", "home"],
    },
  },
  {
    testCase: "Valid Product",
    data: {
      productId: "ABC123",
      name: "Smartphone",
      price: 499.99,
      category: "Electronics",
      tags: ["phone", "tech"],
      description: "A high-quality smartphone with advanced features.",
    },
  },
  {
    testCase: "Missing Name",
    data: {
      productId: "XYZ456",
      price: 199.99,
      category: "Electronics",
      tags: ["gadget", "tech"],
      description: "A compact electronic device.",
    },
  },
  {
    testCase: "Missing Price",
    data: {
      productId: "DEF789",
      name: "Bluetooth Speaker",
      category: "Electronics",
      tags: ["audio", "music"],
      description: "A portable speaker with wireless connectivity.",
    },
  },
  {
    testCase: "Invalid Category",
    data: {
      productId: "GHI101",
      name: "T-shirt",
      price: 19.99,
      category: "Fashion", // Invalid category
      tags: ["clothing", "apparel"],
      description: "A comfortable t-shirt for everyday wear.",
    },
  },
  {
    testCase: "Invalid Tags (Non-string Element)",
    data: {
      productId: "JKL202",
      name: "Sunglasses",
      price: 39.99,
      category: "Fashion",
      tags: ["uv-protection", 123], // Non-string tag
      description: "Stylish sunglasses for UV protection.",
    },
  },
  {
    testCase: "Empty Description",
    data: {
      productId: "MNO303",
      name: "Notebook",
      price: 4.99,
      category: "Stationery",
      tags: ["writing", "school"],
      description: "", // Empty description
    },
  },
  {
    testCase: "Valid Product with Additional Property",
    data: {
      productId: "PQR404",
      name: "Backpack",
      price: 29.99,
      category: "Travel",
      tags: ["bag", "travel"],
      description: "A durable backpack for outdoor adventures.",
      color: "blue", // Additional property not defined in schema
    },
  },
];
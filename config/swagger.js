const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
		info: {
			version: "1.0.0",
      title: "Power Pulse API",
      description: "",
      contact: {
        name: "",
			},
			consumes: ["application/json"],
			produces: ["application/json"],
			// servers: ["https://power-pulse.onrender.com"],
		servers: ["https://localhost:3030"],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        RegisterInput: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
          required: ["name", "email", "password"],
          example: {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
          },
        },
        RegisterResponse: {
          type: "object",
          properties: {
            token: { type: "string" },
            user: {
              type: "object",
              properties: {
                name: { type: "string" },
                email: { type: "string", format: "email" },
              },
            },
          },
          example: {
            token: "your-auth-token",
            user: {
              name: "John Doe",
              email: "john@example.com",
            },
          },
        },
        LoginInput: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
          required: ["email", "password"],
          example: {
            email: "john@example.com",
            password: "password123",
          },
        },
        UpdateUserParams: {
          type: "object",
          properties: {
            height: { type: "number", minimum: 150 },
            currentWeight: { type: "number", minimum: 35 },
            desiredWeight: { type: "number", minimum: 35 },
            birthday: {
              type: "string",
              format: "date",
            },
            blood: { type: "number", enum: [1, 2, 3, 4] },
            sex: { type: "string", enum: ["male", "female"] },
            levelActivity: { type: "number", enum: [1, 2, 3, 4, 5] },
          },
          required: [
            "height",
            "currentWeight",
            "desiredWeight",
            "birthday",
            "blood",
            "sex",
            "levelActivity",
          ],
          example: {
            height: 170,
            currentWeight: 75,
            desiredWeight: 70,
            birthday: "1990-01-01",
            blood: 1,
            sex: "male",
            levelActivity: 3,
          },
        },
        UpdateUsernameInput: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
          required: ["name"],
          example: {
            name: "New Name",
          },
				},
				SavingConsumedProduct: {
          type: "object",
          properties: {
            productId: { type: "Schema.Types.ObjectId" },
            amount: { type: "integer", min: 1 },
						calories: { type: "integer", min: 1 },
          },
          required: ["productId", "amount", "calories"],
          example: {
            productId: "5d51694902b2373622ff5b7f",
            amount: 200,
            calories: 224,
          },
				},
				SavingCompletedExercise: {
          type: "object",
          properties: {
            exerciseId: { type: "Schema.Types.ObjectId" },
            time: { type: "integer", min: 1 },
						calories: { type: "integer", min: 1 },
          },
          required: ["productId", "time", "calories"],
          example: {
            exerciseId: "65089cba822834622223fd91",
            time: 6,
            calories: 646,
          },
				},
        Category: {
          type: "object",
          properties: {
            _id: { type: "string" },
            productsCategories: {
              type: "array",
              items: { type: "string" },
            },
          },
          required: ["_id", "productsCategories"],
          example: {
            _id: "65089d2582283462222402be",
            productsCategories: [
              "alcoholic drinks",
              "berries",
              "cereals",
              "dairy",
              "dried fruits",
              "eggs",
              "fish",
              "flour",
              "fruits",
              "meat",
              "mushrooms",
              "nuts",
              "oils and fats",
              "poppy",
              "sausage",
              "seeds",
              "sesame",
              "soft drinks",
              "vegetables and herbs",
            ],
          },
        },
      },
    },
  },
  apis: ["./routes/api/*.js"],
  tags: [
    { name: "Auth", description: "Authentication" },
		{ name: "Users", description: "Operations related to users" },
		{ name: "Diary", description: "Operations related to diary" },
    { name: "Products", description: "Operations related to products" },
  ],
};

module.exports = swaggerOptions;

import swaggerJSDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lost & Found API",
      version: "1.0.0",
      description: "Backend API for Lost & Found system (Items + Auth)",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    tags: [
      {
        name: "Auth",
        description: "Authentication (Register/Login)",
      },
      {
        name: "Items",
        description: "Lost & Found item management",
      },
    ],
  },

  // IMPORTANT: this makes BOTH authRoutes + itemRoutes visible
  apis: ["./routes/*.js"],
});

export default swaggerSpec;
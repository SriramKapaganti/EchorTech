const express = require("express");
const routes = require("./src/apiEndpoint");

const app = express();

// Middleware to parse the incoming JSON request body
app.use(express.json());

// Using routes

app.use("/", routes);

app.use("/api", routes);

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;

const express = require("express");

const app = express();

// swaggeer docs
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
  {
    id: "11",
    name: "learn NodeJs",
    price: 299
  },
  {
    id: "11",
    name: "learn React",
    price: 299
  },
  {
    id: "11",
    name: "learn Django",
    price: 299
  }
];

app.get("/", (req, res) => {
  res.send("Hello from the new project");
});
app.get("/api/v1/lco", (req, res) => {
  res.json({ data: "Hello from the LCO" });
});

app.listen(3000, () => console.log("Hello from express server 3000"));

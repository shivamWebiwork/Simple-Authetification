require("dotenv").config();
console.log(process.env.PORT);

import express from "express";
import bodyParser from "body-parser";
import router from "./routes/indexRouter";
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});

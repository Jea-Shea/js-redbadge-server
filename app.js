require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./db");
const headers = require("./middleware/headers");

app.use(headers);
app.use(express.json())

database.sync();

let user = require("./controllers/usercontroller");
app.use("/user", user);


app.listen(process.env.PORT, function () {
    console.log(`App is listening on port ${process.env.PORT}`);
  });
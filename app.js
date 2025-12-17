const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./src/config/dbConfig");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    console.log("body: ", req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

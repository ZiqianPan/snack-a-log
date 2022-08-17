// DEPENDENCIES

const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


const snackController = require("./controllers/snackController");

// ROUTES
app.get("/", (req, res) => {
    res.send("Get Snack'n at Snack-a-log!");
  });

app.use("/snacks", snackController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});



// EXPORT
module.exports = app;

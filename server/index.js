const express = require("express");
const mongoose = require('mongoose');
const routes = require("./controllers/index")
const userRoutes = require("./controllers/users")

var app = express();
const PORT = 3001;

mongoose.connect('https://updated-donation-tracker.herokuapp.com/', {useNewUrlParser: true}).then (()=>console.log("Yippee!!!"))

app.get("/", (request, response) => {
    response.send("Hello!")
});

app.use(routes);
app.use("/users", userRoutes);

app.use((request, response) => {
    response.status(404).end();
});

app.listen(PORT, () => {
    console.log("Server is now running on ", PORT)
});
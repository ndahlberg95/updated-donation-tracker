const express = require("express");
const mongoose = require('mongoose');
const routes = require("./controllers/itemsController")
const userRoutes = require("./controllers/users")

var app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://dsanchezjr99:Mcc0nkie!1999@donation-tracker.q1dnm.mongodb.net/donations?retryWrites=true&w=majority', {useNewUrlParser: true}).then (()=>console.log("Yippee!!!"))

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
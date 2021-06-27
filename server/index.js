const express = require("express");

const routes = require("./controllers/index")
const userRoutes = require("./controllers/users")

var app = express();
const PORT = 3001;

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
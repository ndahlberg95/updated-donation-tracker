// MongoDB
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')

// COnnecting to the MongoDB
mongoose
  .connect("mongodb://", { useNewUrlParser: true })
  .then(() => {
    const app = express();
      app.use(express.json())
		  app.use("/api", routes)
      
      app.listen(5000, () => {
      console.log('Server Has Started');
    })
  })
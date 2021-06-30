const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

router.get("/hello", (request, response) => {
  response.send("Adios users!")
});

module.exports = router;
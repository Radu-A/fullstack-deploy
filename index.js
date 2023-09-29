// Require
const express = require("express");
const providersRouter = require("./routes/providerRoutes");
const cors = require("cors");

// Declare express
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Your host is: http://localhost:${port}`);
});

// Middlewares
app.use(cors());
app.use("/", providersRouter);

// Express configuration
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Your host is: http://localhost:${port}`);
});
// Router
const providersRouter = require("./routes/providerRoutes");
app.use("/", providersRouter);

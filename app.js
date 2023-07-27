const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./utils/errorHandler");
const { router: testRouter } = require("./controllers/test");
const { router: articlesRouter } = require("./controllers/articles");
const { router: authorsRouter } = require("./controllers/authors");

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/api/test", testRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/authors", authorsRouter);

app.use(errorHandler);

module.exports = app;

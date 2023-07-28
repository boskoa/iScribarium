const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./utils/errorHandler");
const { router: testRouter } = require("./controllers/test");
const { router: articlesRouter } = require("./controllers/articles");
const { router: authorsRouter } = require("./controllers/authors");
const { router: categoriesRouter } = require("./controllers/categories");

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/api/test", testRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoriesRouter);

app.use(errorHandler);

module.exports = app;

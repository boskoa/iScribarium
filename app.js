const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./utils/errorHandler");
const { router: testRouter } = require("./controllers/test");
const { router: articlesRouter } = require("./controllers/articles");
const { router: authorsRouter } = require("./controllers/authors");
const { router: categoriesRouter } = require("./controllers/categories");
const { router: loginRouter } = require("./controllers/login");
const { router: avatarsRouter } = require("./controllers/avatars");

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/api/test", testRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/login", loginRouter);
app.use("/api/avatars", avatarsRouter);

app.use(errorHandler);

module.exports = app;

const express = require("express");
const cors = require("cors");
const path = require("path");
const { errorHandler } = require("./utils/errorHandler");
const { router: testRouter } = require("./controllers/test");
const { router: articlesRouter } = require("./controllers/articles");
const { router: authorsRouter } = require("./controllers/authors");
const { router: categoriesRouter } = require("./controllers/categories");
const { router: loginRouter } = require("./controllers/login");
const { router: avatarsRouter } = require("./controllers/avatars");

const app = express();

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("dist"));

// routers
app.use("/api/test", testRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/login", loginRouter);
app.use("/api/avatars", avatarsRouter);

app.all("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(errorHandler);

module.exports = app;

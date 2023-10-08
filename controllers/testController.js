const router = require("express").Router();

router.get("/", (_req, res) => {
  return res.status(200).send("HAI MARK");
});

module.exports = { router };

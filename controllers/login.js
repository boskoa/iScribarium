const { Author } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/config");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).json({ error: "No credentials entered" });
  }

  const author = await Author.findOne({
    where: { username: req.body.username },
  });
  if (!author) {
    return res.status(401).json({ error: "No such username" });
  }

  try {
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      author.passwordHash,
    );
    if (!passwordCorrect) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const authorForToken = {
      id: author.id,
      username: author.username,
    };

    const token = jwt.sign(authorForToken, SECRET);
    return res.status(200).send({
      token,
      id: author.id,
      name: author.name,
      username: author.username,
      email: author.email,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { router };

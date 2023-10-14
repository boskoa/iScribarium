/* eslint-disable indent */
const { Author, Article } = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { sequelize } = require("../utils/db");

router.get("/", async (req, res, next) => {
  let order = [];
  let pagination = {};

  if (req.query.order) {
    const [field, criterium] = req.query.order.split(",");
    order = [
      [field, criterium.toUpperCase()],
      ["id", "ASC"],
    ];
  }

  if (req.query.pagination) {
    const [offset, limit] = req.query.pagination.split(",");
    pagination = { offset, limit };
  }

  try {
    const authors = await sequelize.query(
      `
      SELECT
        authors.id,
        authors.username,
        authors.name,
        authors.email,
        authors.created_at,
        authors.updated_at,
        COUNT(articles.id) AS count,
        JSON_AGG((articles.id, articles.title, articles.author_id, articles.created_at, articles.updated_at)) AS articles
      FROM authors
      LEFT JOIN articles ON authors.id=articles.author_id
      GROUP BY authors.id
      ${
        order.length
          ? `ORDER BY ${order[0][0]} ${order[0][1]}, ${order[1][0]} ${order[1][1]}`
          : ""
      }
      ${
        Object.keys(pagination).length
          ? `LIMIT ${pagination.limit} OFFSET ${pagination.offset}`
          : ""
      }
      `,
      {
        type: sequelize.QueryTypes.SELECT,
      },
    );
    /*
    const authors = await Author.findAll({
      attributes: {
        exclude: ["passwordHash"],
        include: [
          [
            sequelize.literal(
              "(SELECT COUNT(articles.id) FROM articles where articles.author_id=author.id)",
            ),
            "count",
          ],
        ],
      },
      order,
      ...pagination,
      include: {
        model: Article,
        attributes: ["id", "authorId", "title", "createdAt"],
      },
      group: req.query.order && ["author.id"],
    });
    */

    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      attributes: { exclude: ["passwordHash"] },
    });
    if (!author) {
      return res.status(404).json({ error: "No such author" });
    }
    return res.status(200).json(author);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.email
  ) {
    return res.status(401).json({ error: "Missing required data" });
  }

  if (req.body.password.length < 2) {
    return res.status(401).json({ error: "Password is too short" });
  }
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const userData = { ...req.body };
    delete userData.password;
    userData.passwordHash = passwordHash;
    await Author.create({ ...userData });
    const newAuthor = await Author.findOne({
      where: { username: userData.username },
      attributes: { exclude: ["passwordHash"] },
      include: Article,
    });
    return res.status(200).json(newAuthor);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", tokenExtractor, async (req, res, next) => {
  const changer = await Author.findByPk(req.decodedToken.id);

  if (Number(req.params.id) !== req.decodedToken.id && !changer?.admin) {
    return res.status(401).json({ error: "Not authorized" });
  }

  if (!req.body) {
    return res.status(200).send("Nothing to change");
  }

  try {
    const authorToChange = await Author.findByPk(req.params.id);
    let newData = { ...req.body };
    if (newData.password) {
      const passwordHash = await bcrypt.hash(newData.password, 10);
      newData.passwordHash = passwordHash;
      delete newData.password;
    }
    authorToChange.set(newData);
    await authorToChange.save();
    const changedAuthor = await Author.findByPk(req.params.id, {
      attributes: { exclude: ["passwordHash"] },
    });
    return res.status(200).json(changedAuthor);
  } catch (error) {
    next(error);
  }
});

//Not necessary
router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const changer = await Author.findByPk(req.decodedToken.id);

  if (!changer?.admin) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    await Author.destroy({ where: { id: req.params.id } });
    return res.status(200).send(`Author with the id ${req.params.id} deleted`);
  } catch (error) {
    next(error);
  }
});

module.exports = { router };

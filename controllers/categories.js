const { Category, Article, Author } = require("../models");
const { tokenExtractor } = require("../utils/tokenExtractor");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  let order;
  let pagination;

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
    const categories = await Category.findAll({
      order,
      ...pagination,
    });
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Article,
    });
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  const author = await Author.findByPk(req.decodedToken.id);
  if (!author) {
    return res.status(401).json({ error: "Missing token" });
  }

  if (!req.body.name) {
    return res.status(401).json({ error: "Missing data" });
  }

  try {
    const category = await Category.create({ name: req.body.name });
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const user = Author.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    const category = await Category.findByPk(req.params.id, {
      include: Article,
    });
    if (category.articles.length) {
      return res
        .status(401)
        .json({ error: "Category contains articles, can not delete." });
    }
    await category.destroy();

    return res
      .status(200)
      .send(`Category with the id ${req.params.id} deleted`);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", tokenExtractor, async (req, res, next) => {
  const author = await Author.findByPk(req.decodedToken.id);
  if (!author) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    const category = await Category.findByPk(req.params.id);
    if (!req.body.name || req.body.name === category.name) {
      return res.status(401).json({ error: "Nothing to change" });
    }

    category.set({ name: req.body.name });
    await category.save();
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = { router };

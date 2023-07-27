const { Article, Category } = require("../models");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const articles = await Article.findAll({ include: Category });
    return res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newArticle = await Article.create({ ...req.body.article });
    const category = await Category.create({ name: req.body.category });
    await newArticle.addCategory(category);
    return res.status(200).json(newArticle);
  } catch (error) {
    next(error);
  }
});

module.exports = { router };

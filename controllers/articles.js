const { Op } = require("sequelize");
const { Article, Category, Author } = require("../models");
const { Article_Category } = require("../models/articleCategory");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { sequelize } = require("../utils/db");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  let where = {};
  let order = [];
  let pagination = {};
  let whereCategories = [];

  if (req.query.title) {
    where = {
      ...where,
      title: { [Op.iLike]: `%${req.query.title.split(",").join(" ")}%` },
    };
  }

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

  if (req.query.categories) {
    whereCategories = req.query.categories
      .split(",")
      .map((c) => c[0].toUpperCase() + c.slice(1));
  }

  try {
    const articles = await Article.findAll({
      where,
      ...pagination,
      order,
      include: {
        model: Category,
        attributes: ["name"],
        [whereCategories.length && "where"]: {
          name: whereCategories,
        },
      },
    });
    return res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

router.get("/random", async (req, res, next) => {
  try {
    const random = await Article.findOne({
      order: sequelize.random(),
    });
    return res.status(200).json(random);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [
        Category,
        { model: Author, attributes: { exclude: "passwordHash" } },
      ],
    });
    if (article) {
      return res.status(200).json(article);
    } else {
      return res.status(404).json({ error: "Article was not found" });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  const author = await Author.findByPk(req.decodedToken.id);
  if (!author) {
    return res.status(401).json({ error: "Missing token" });
  }

  if (!author.approved) {
    return res.status(401).json({
      error: "Not authorized for this action yet. Please, contact admin.",
    });
  }

  try {
    const newArticle = await Article.create({ ...req.body.article });
    if (req.body.categories) {
      for (const name of req.body.categories) {
        let category = await Category.findOne({ where: { name } });
        if (!category) {
          category = await Category.create({ name });
        }
        await newArticle.addCategory(category);
      }
    }
    const updatedArticle = await Article.findOne({
      where: { id: newArticle.id },
      include: Category,
    });
    return res.status(200).json(updatedArticle);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", tokenExtractor, async (req, res, next) => {
  const author = await Author.findByPk(req.decodedToken.id);
  const article = await Article.findByPk(req.params.id);

  if ((!author || author.id !== article.authorId) && !author.admin) {
    return res
      .status(401)
      .json({ error: "You are not authorized for this action." });
  }

  if (!req.body) {
    return res.status(401).json({ error: "Nothing to change" });
  }

  try {
    const newData = { ...req.body };
    if (newData.categories?.length > 0) {
      await Article_Category.destroy({ where: { articleId: article.id } });
      for (const name of newData.categories) {
        let category = await Category.findOne({ where: { name } });
        if (!category) {
          category = await Category.create({ name });
        }
        await article.addCategory(category);
      }
      delete newData.categories;
    }
    article.set(newData);
    await article.save();
    const updatedArticle = await Article.findByPk(article.id, {
      include: Category,
    });
    return res.status(200).json(updatedArticle);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const author = await Author.findByPk(req.decodedToken.id);
  const article = await Article.findByPk(req.params.id);

  if ((!author || author.id !== article.authorId) && !author.admin) {
    return res
      .status(401)
      .json({ error: "You are not authorized for this action." });
  }

  if (article.categories?.length) {
    await Article_Category.destroy({ where: { articleId: article.id } });
  }

  try {
    await article.destroy();
    return res.status(200).send(req.params.id);
  } catch (error) {
    next(error);
  }
});

module.exports = { router };

const { Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class Article_Category extends Model {}

Article_Category.init(
  {},
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "article_category",
  },
);

module.exports = { Article_Category };

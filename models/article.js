const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    modelName: "article",
  },
);

module.exports = { Article };

const { Article } = require("./article");
const { Article_Category } = require("./articleCategory");
const { Author } = require("./author");
const { Category } = require("./category");

Author.hasMany(Article);
Article.belongsTo(Author);

Category.belongsToMany(Article, { through: Article_Category });
Article.belongsToMany(Category, { through: Article_Category });

module.exports = { Article, Author, Category };

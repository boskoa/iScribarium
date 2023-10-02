const { Article } = require("./article");
const { Article_Category } = require("./articleCategory");
const { Author } = require("./author");
const { Category } = require("./category");

Author.hasMany(Article);
Article.belongsTo(Author);

Category.belongsToMany(Article, { through: Article_Category });
Article.belongsToMany(Category, { through: Article_Category });

Category.hasMany(Article_Category);
Article_Category.belongsTo(Category);

Article.hasMany(Article_Category);
Article_Category.belongsTo(Article);

module.exports = { Article, Author, Category };

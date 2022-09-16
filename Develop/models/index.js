// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "product_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "ProductTag",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "ProductTag",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

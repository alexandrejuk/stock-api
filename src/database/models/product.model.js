const {
  STRING,
  NUMBER,
} = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
    description: STRING,
    minQuantity: NUMBER,
    price: NUMBER,
  });
  Product.associate = (models) => {
    models.Product.hasMany(models.Stock);
    models.Product.hasMany(models.Stock);
  };
  return Product;
};

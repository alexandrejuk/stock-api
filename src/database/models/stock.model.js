const {
  ENUM,
  NUMBER,
  STRING,
} = require('sequelize');

module.exports = (sequelize) => {
  const Stock = sequelize.define('stock', {
    billSale: STRING,
    quantity: NUMBER,
    valueBuy: NUMBER,
    valueSell: NUMBER,
    type: ENUM('entrada', 'saida'),
  });
  Stock.associate = (models) => {
    models.Stock.belongsTo(models.Product);
  };
  return Stock;
};

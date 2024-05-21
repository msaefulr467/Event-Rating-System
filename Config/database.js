const { Sequelize } = require('sequelize');

// Menginisialisasi objek Sequelize
const sequelize = new Sequelize('bazma_acara_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logger: false // Menonaktifkan logging
});

module.exports = sequelize;

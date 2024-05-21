const sequelize = require('../Config/database');
const User = require('./user')(sequelize);
const Feedback = require('./feedback')(sequelize);

// Define relationships
User.hasMany(Feedback, { foreignKey: 'userId', onDelete: 'CASCADE' });
Feedback.belongsTo(User, { foreignKey: 'userId' });

const db = {
  User,
  Feedback,
  sequelize
};

module.exports = db;

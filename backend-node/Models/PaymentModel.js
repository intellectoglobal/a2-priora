const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Payments = sequelize.define(
  "Payments",
  {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    payment_mode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_receipt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

// Payments.associate = function (models) {
//   Payments.hasMany(models.CourseRegister, {
//     foreignKey: "payment",
//   });
// };

module.exports = Payments;

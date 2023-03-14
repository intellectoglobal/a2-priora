const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Course = require("./CourseModel");
const CourseRegister = sequelize.define(
  "CourseRegister",
  {
    register_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    sponsership_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alternative_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FIN_NRIC_Passport_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    membership_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    membership_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

// CourseRegister.hasMany(Course, {
//   foreignKey: "selected_course",
// });
// CourseRegister.hasMany(Payment, {
//   foreignKey: "payment",
// });

module.exports = CourseRegister;

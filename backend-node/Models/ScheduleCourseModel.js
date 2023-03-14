const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ScheduleCourse = sequelize.define(
  "ScheduleCourse",
  {
    run: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PDU: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CET: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day_period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    max_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    confirmation_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certificate_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync()
  .then(() => {
    console.log("Schedule Course table created successfully");
  })
  .catch((err) => {
    console.log("Something went wrong :", err);
  });

module.exports = ScheduleCourse;

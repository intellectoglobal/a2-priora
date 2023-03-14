const sequelize = require("../sequelize");
const Course = require("./CourseModel");
const CourseRegister = require("./CourseRegisterModel");
const Payments = require("./PaymentModel");

Course.hasMany(CourseRegister, {
  foreignKey: "selected_course",
  allowNull:false,
});
Payments.hasMany(CourseRegister, {
  foreignKey: "payments",
  allowNull:false,
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Course table created successfully");
  })
  .catch((err) => {
    console.error("Unable to create course table:", err);
  });
const initilize = module.exports ;
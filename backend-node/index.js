const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const Sequelize = require("sequelize");
require('dotenv').config();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
const pass = "admin"
const password =()=>{
  if (pass === "admin"){
    return pass
  }else{
    throw new Error("pass must be string");
  }
}

// const sequelize = new Sequelize(`postgres://postgres:admin@localhost:5432/a2priora`);
const sequelize = new Sequelize("a2priora", "postgres", process.env.DB_PASS, {
  host: "localhost",
  dialect: "postgres",
  dialectOptions: {
   
  }
 });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const corsOrigin = {
  origin: ["http://localhost:3000"],
  credentials: true,
  crossorigin: true,
  optionSuccessStatus: 200,
};

const courseSchema = require("./Routes/CourseRoute");

app.use(express.json());

app.use(cors(corsOrigin));

app.use("/course", courseSchema);

app.listen(5000, () => {
  console.log(`Example app listening on port ${PORT}`);
});

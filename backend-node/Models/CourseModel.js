const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres::memory:');
// const sequelize = require('../index.js').sequelize;

const Course = sequelize.define('Course', {
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
        primaryKey: true,
    },
    course_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_added_date:{
        type: DataTypes.DATE,
        allowNull:false,
    },
    run:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    PDU:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    CET:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    STU:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    duration:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    day_peroid:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    certificate_code:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    fee:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    visibility:{
        type: DataTypes.STRING,
        allowNull:false,
    }

});

sequelize.sync()
    .then(() => {
        console.log('Course table created successfully');
    })
    .catch((err) => {
        console.error('Unable to create user table:', err);
    });

module.exports = Course;

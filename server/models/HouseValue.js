const { Sequelize, DataTypes, Model } = require('sequelize');
const dbConfig = require('../configs/db.config');

const dbInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.DIALECT,
    host: dbConfig.HOST
});

const HouseValue = dbInstance.define('zillow_home_values', {
    RegionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Metro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    State: {
        type: DataTypes.STRING,
        allowNull: false
    },
    '1996-04': {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

HouseValue.removeAttribute('createdAt');
HouseValue.removeAttribute('updatedAt');

module.exports = HouseValue;
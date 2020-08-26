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
    '1996': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '1997': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '1998': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '1999': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2000': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2001': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2002': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2003': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2004': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2005': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2006': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2007': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2008': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2009': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2010': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2011': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2012': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2013': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2014': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2015': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    '2016': {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

HouseValue.removeAttribute('createdAt');
HouseValue.removeAttribute('updatedAt');

module.exports = HouseValue;
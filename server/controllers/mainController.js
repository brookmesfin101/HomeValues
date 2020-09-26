const HouseValue = require('../models/HouseValue');
const sequelize = require('sequelize');

exports.GetByYear = (req, res, next) => {    
    const year = req.query.year;

    res.send(year);
}

exports.GetTop = (req, res, next) => {        
    var quantity = req.params.quantity;

    HouseValue.findAll({              
        attributes: [
            `State`, `Metro`, [sequelize.fn('round', sequelize.fn('avg', sequelize.col('2016'))), "y2016"]            
        ],
        order: [
            [`2016`, 'DESC']
        ],
        group: [
            `Metro`
        ],
        limit: parseInt(quantity)   
    }).then((result) => {
        res.send(result);        
    }).catch((err) => {
        console.log(err);
    })    
}

exports.GetBottom = (req, res, next) => {
    var quantity = req.params.quantity;

    HouseValue.findAll({              
        attributes: [
            `State`, `Metro`, [sequelize.fn('avg', sequelize.col('2016')), "y2016"]
        ],
        order: [
            [`2016`, 'ASC']
        ],
        group: [
            `Metro`
        ],
        limit: parseInt(quantity)   
    }).then((result) => {
        res.send(result);        
    }).catch((err) => {
        console.log(err);
    })  
}


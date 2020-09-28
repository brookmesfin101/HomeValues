const HouseValue = require('../models/HouseValue');
const sequelize = require('sequelize');
const Op = require('sequelize').Op;

exports.GetByYear = (req, res, next) => {    
    const year = req.query.year;

    res.send(year);
}

exports.GetByState = (req, res, next) => {
    var state = req.params.state;
    var order = req.params.order;
    var quantity = req.params.quantity;
    
    HouseValue.findAll({
        attributes: [
            `State`, `Metro`, [sequelize.fn('round', sequelize.fn('avg', sequelize.col('2016'))), "y2016"]            
        ],
        where: {
            State: state,
            Metro: {
                [Op.ne]: ''
            }
        },
        group: [
            `Metro`
        ],
        order: [
            [`2016`, 'DESC']
        ],
    }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    })
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
    }).then(result => {
        res.send(result);        
    }).catch(err => {
        console.log(err);
    })    
}

exports.GetByStateOverTheYears = (req, res, next) => {
    var state = req.params.state;
    var order = req.params.order;
    var quantity = req.params.quantity;

    
}

exports.GetBottom = (req, res, next) => {
    var quantity = req.params.quantity;

    HouseValue.findAll({              
        attributes: [
            `State`, `Metro`, [sequelize.fn('round', sequelize.fn('avg', sequelize.col('2016'))), "y2016"]  
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


const HouseValue = require('../models/HouseValue');

exports.GetByYear = (req, res, next) => {    
    const year = req.query.year;

    res.send(year);
}

exports.GetTop = (req, res, next) => {        
    var quantity = req.params.quantity;

    HouseValue.findAll({
        attributes: [
            'State','Metro',`2016`
        ],
        order: [
            '2016'
        ],
        limit: quantity
    }).then((res) => {
        res.send(res.data);
    }).catch((err) => {
        console.log(err);
    })    
}


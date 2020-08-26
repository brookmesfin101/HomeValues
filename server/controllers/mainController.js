const HouseValue = require('../models/HouseValue');

exports.GetByYear = (req, res, next) => {    
    const year = req.query.year;

    res.send(year);
}


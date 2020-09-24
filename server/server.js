const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require("https");

const Sequelize = require('sequelize').Sequelize;
const dbConfig = require('./configs/db.work.config');
const HouseValue = require('./models/HouseValue');

const mainRoutes = require('./routes/main');

const dbInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.DIALECT,
    host: dbConfig.HOST
});

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.get("/", (req, res) => {    
    HouseValue.findAll({ where: {State: 'AK'}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occurred while retreiving data."
            });
        });
  });

dbInstance
    .sync()
    .then(res => {
        app.listen(8081);
    })
    .catch(err => {
        console.log(err);
    });
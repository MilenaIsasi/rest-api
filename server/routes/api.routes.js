const ApiController = require ('../controllers/api.controller');
const swaggerDocument = require('../config/swagger.config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


module.exports = function (app){
    app.get('/users', ApiController.api);
    app.get('/users/:id', ApiController.getbyId);
    app.post('/users', ApiController.create);
    app.delete('/users/:id', ApiController.delete);

}
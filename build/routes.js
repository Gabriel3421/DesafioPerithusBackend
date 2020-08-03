const { Router } = require('express')
const logsMiddleware = require('./middleware/logs')
const CovidController = require('./controllers/CovidController')

const routes = new Router();

routes.use(logsMiddleware);

routes.get('/covid/:state', CovidController.show );
routes.get('/', CovidController.index );

module.exports = routes;

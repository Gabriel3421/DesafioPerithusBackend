import { Router } from 'express';
import logsMiddleware from './middleware/logs'
import CovidController from './controllers/CovidController'

const routes = new Router();

routes.use(logsMiddleware);

routes.get('/covid/:state', CovidController.show );
routes.get('/covid', CovidController.index );

export default routes;

import { Router } from 'express';
import isAuthenticated from '../middlewares/auth';
import goldenRoutes from '@mangas/goldenmanga/routes';

const routes = Router();

routes.use('/goldenmangas', isAuthenticated, goldenRoutes);

export default routes;

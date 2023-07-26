import { Router } from 'express';
import goldenRoutes from '@mangas/goldenmanga/routes';
import brMangasRoutes from '@mangas/brmangas/routes';

const routes = Router();

routes.use('/goldenmangas', goldenRoutes);
routes.use('/brmangas', brMangasRoutes);

export default routes;

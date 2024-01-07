import { Router } from 'express';
import brMangasRoutes from '@mangas/brmangas/routes';

const routes = Router();

routes.use('/brmangas', brMangasRoutes);

export default routes;

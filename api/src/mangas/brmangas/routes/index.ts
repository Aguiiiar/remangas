import { Router } from 'express';
import { GenresController } from '@mangas/brmangas/controllers';

const brMangasRoutes = Router();
const genresController = new GenresController();

brMangasRoutes.get('/genres', genresController.genres);

export default brMangasRoutes;

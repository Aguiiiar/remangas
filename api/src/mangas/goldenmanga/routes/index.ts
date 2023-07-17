import { Router } from 'express';
import { GenresController, MangaController } from '../controllers';
import isAuthenticated from '@shared/http/middlewares/auth';

const goldenRoutes = Router();
const genresController = new GenresController();
const mangaController = new MangaController();

goldenRoutes.get('/genres', isAuthenticated, genresController.genres);
goldenRoutes.get('/mangas', isAuthenticated, genresController.genre);
goldenRoutes.get('/manga', isAuthenticated, mangaController.handle);

export default goldenRoutes;

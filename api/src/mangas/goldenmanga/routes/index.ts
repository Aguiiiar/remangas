import { Router } from 'express';
import {
  GenresController,
  MangaController,
  MangaReaderController,
} from '../controllers';

const goldenRoutes = Router();
const genresController = new GenresController();
const mangaController = new MangaController();
const mangaReader = new MangaReaderController();

goldenRoutes.get('/genres', genresController.genres);
goldenRoutes.get('/mangas', genresController.genre);
goldenRoutes.get('/manga', mangaController.handle);
goldenRoutes.get('/manga/reader', mangaReader.handle);
export default goldenRoutes;

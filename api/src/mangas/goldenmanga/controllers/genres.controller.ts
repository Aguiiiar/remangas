import { Request, Response } from 'express';
import { GenreService, GenresService } from '../services';

export class GenresController {
  async genres(request: Request, response: Response): Promise<Response> {
    const adult: boolean = request.query.adult === 'true' ? true : false;
    const genres = await new GenresService().handle(adult);

    return response.status(200).json(genres);
  }

  async genre(request: Request, response: Response): Promise<Response> {
    const { genre, page } = request.query as unknown as {
      genre: string;
      page: string;
    };
    const genres = await new GenreService().handle(genre, page);

    return response.status(200).json(genres);
  }
}

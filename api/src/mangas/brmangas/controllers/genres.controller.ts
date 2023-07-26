import { Request, Response } from 'express';
import { GenresService } from '@mangas/brmangas/services';

export class GenresController {
  public async genres(request: Request, response: Response): Promise<Response> {
    const adult: boolean = request.query.adult === 'true';
    const genres = await new GenresService().handle(adult);

    return response.status(200).json({ genres });
  }
}

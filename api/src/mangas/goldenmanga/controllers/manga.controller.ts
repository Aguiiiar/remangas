import { Request, Response } from 'express';
import { MangaService } from '../services';

export class MangaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pageUrl } = request.query as { pageUrl: string };
    const manga = await new MangaService().handle(pageUrl);

    return response.status(200).json(manga);
  }
}

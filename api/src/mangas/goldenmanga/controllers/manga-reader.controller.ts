import { Request, Response } from 'express';
import { MangaReaderService } from '@mangas/goldenmanga/services';

export class MangaReaderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { manga, chapter } = request.query as {
      manga: string;
      chapter: string;
    };
    const mangaReader = await new MangaReaderService().handle({
      manga,
      chapter,
    });

    return response.status(200).json(mangaReader);
  }
}

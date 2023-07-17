import { FetchHelper, JSDOMHelper, transformString } from '@shared/helpers';
import { GenreModel } from '../models/goldenmanga.model';
import AppError from '@shared/http/errors/AppError';

export class GenreService {
  private baseUrl = 'https://goldenmanga.top';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle(
    genre: string,
    page: string,
  ): Promise<GenreModel[] | string> {
    const pagination =
      page === undefined
        ? `/mangas?genero=${genre}`
        : `/mangas?genero=${genre}&pagina=${page}`;

    console.log(pagination);
    const data: string = await this.fetch.get(pagination);
    const document = new JSDOMHelper(data);

    const mangas = document.getAllElements('.mangas');

    const genresMangas: GenreModel[] = Array.from(mangas).map(manga => ({
      name: manga.querySelector('h3')?.textContent || '',
      urlImage:
        this.baseUrl +
          manga.querySelector('.img-responsive')?.getAttribute('src') || '',
      pageUrl:
        this.baseUrl + (manga.querySelector('a')?.getAttribute('href') || ''),
    }));

    console.log(
      transformString(
        'Kono Subarashii Sekai ni Shukufuku wo! - KazuMegu (Doujinshi)',
      ),
    );

    if (genresMangas.length === 0) {
      throw new AppError('Genre page not found', 404);
    }

    return genresMangas;
  }
}

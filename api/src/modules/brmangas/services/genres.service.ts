import { FetchHelper, JSDOMHelper } from '@shared/helpers';
import { findAdult, GenresModel } from '@shared/helpers/find-adult';

export class GenresService {
  private baseUrl = 'https://www.brmangas.net';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle(adult: boolean): Promise<GenresModel[]> {
    const data: string = await this.fetch.get('/lista-de-generos-de-manga');

    const document = new JSDOMHelper(data);
    const genresData = document.getElement('.genres_page ul');

    const genres: GenresModel[] = Array.from(
      genresData?.querySelectorAll('a') || [],
    ).map(genre => ({
      name: genre.querySelector('li')?.textContent,
      pageUrl: genre.getAttribute('href'),
    }));

    return findAdult(genres, adult);
  }
}

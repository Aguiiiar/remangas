import { FetchHelper, JSDOMHelper } from '@shared/helpers';
import { findAdult, GenresModel } from '@shared/helpers/find-adult';

export class GenresService {
  private baseUrl = 'https://goldenmanga.top';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle(adult: boolean): Promise<GenresModel[]> {
    const data: string = await this.fetch.get('/mangas');
    const document = new JSDOMHelper(data);

    const mangas = document.getAllElements('.btn-warning');

    const genresMangas: GenresModel[] = Array.from(mangas).map(manga => ({
      name: manga.textContent || '',
      pageUrl: this.baseUrl + (manga.getAttribute('href') || ''),
    }));

    return findAdult(genresMangas, adult);
  }
}

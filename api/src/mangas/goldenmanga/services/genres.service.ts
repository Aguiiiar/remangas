import { FetchHelper, JSDOMHelper } from '@shared/helpers';
import { GenresModel } from '../models/goldenmanga.model';

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

    return this.filterAdultGenres(genresMangas, adult);
  }

  private filterAdultGenres(
    genres: GenresModel[],
    adult: boolean,
  ): GenresModel[] {
    return adult
      ? genres
      : genres.filter(genre => !genre.name.includes('Adulto'));
  }
}

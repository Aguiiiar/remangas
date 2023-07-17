import {
  FetchHelper,
  JSDOMHelper,
  extractSlugFromUrl,
  filterArray,
} from '@shared/helpers';
import { MangaModel } from '../models/goldenmanga.model';
import AppError from '@shared/http/errors/AppError';

export class MangaService {
  private baseUrl = 'https://goldenmanga.top';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle(pageUrl: string): Promise<MangaModel[] | any> {
    // const extractSlug = extractSlugFromUrl(pageUrl);

    // console.log(extractSlug);

    // if (!extractSlug) {
    //   throw new AppError('Page url not found', 404);
    // }

    // const data: string = await this.fetch.get(`/mangas/${extractSlug}`);
    // const document = new JSDOMHelper(data);

    // const mangaData = document.getElement('.manga');

    // const title = mangaData
    //   ?.querySelector('.img-responsive')
    //   ?.getAttribute('title');
    // const urlImage =
    //   this.baseUrl +
    //   mangaData?.querySelector('.img-responsive')?.getAttribute('src');

    // const genresElementH5 = mangaData?.querySelector('h5.cg_color');
    // const genresElementsA = genresElementH5?.querySelectorAll('a');

    // const genres = genresElementsA?.forEach(element => {
    //   console.log(
    //     element.textContent?.trim() !== '' ? element.textContent : '',
    //   );
    // });

    // console.log(genres);

    // const manga = {
    //   title,
    //   urlImage,
    //   // genres: filterArray(genres),
    // };

    // console.log(genresSplit);

    // console.log(genres?.textContent?.replace('Genero:', '').trim());
    // const chapters = document.getAllElements('.capitulos');
    // chapters.forEach(chapter => {
    //   console.log(chapter);
    // });

    // const genresMangas: GenresModel[] = Array.from(mangas).map(manga => ({
    //   name: manga.textContent || '',
    //   pageUrl: this.baseUrl + (manga.getAttribute('href') || ''),
    // }));

    return 'manga';
  }
}

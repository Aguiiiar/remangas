import { extractSlugFromUrl, FetchHelper, JSDOMHelper } from '@shared/helpers';
import { MangaModel } from '../models/goldenmanga.model';
import AppError from '@shared/http/errors/AppError';

export class MangaService {
  private baseUrl = 'https://goldenmanga.top';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle(pageUrl: string): Promise<MangaModel[]> {
    const extractSlug = extractSlugFromUrl(pageUrl);

    if (!extractSlug) {
      throw new AppError('Page url not found', 404);
    }

    const data: string = await this.fetch.get(`/mangas/${extractSlug}`);
    const document = new JSDOMHelper(data);

    const mangaData = document.getElement('.manga');

    const title = mangaData
      ?.querySelector('.img-responsive')
      ?.getAttribute('title');

    const urlImage =
      this.baseUrl +
      mangaData?.querySelector('.img-responsive')?.getAttribute('src');

    const elementsH5 = mangaData?.querySelector('h5.cg_color');

    const genresElementsA = elementsH5?.querySelectorAll('a');
    const genres =
      Array.from(genresElementsA || [])
        .map(gen => gen.textContent)
        .filter(gen => gen) || [];

    const elementsArray = Array.from(
      mangaData?.querySelectorAll('h5.cg_color') || [],
    ).map(elem => elem.textContent);

    const chapters = Array.from(
      mangaData?.querySelectorAll('.capitulos li') || [],
    ).map(elem => ({
      chapter:
        elem
          .querySelector('div')
          ?.textContent?.match(/\n\nCap (\d+(\.\d+)?) \n/)?.[1] || '',
      pageUrl: this.baseUrl + elem.querySelector('a')?.getAttribute('href'),
    }));

    if (!title) {
      throw new AppError('Manga not found', 404);
    }

    return [
      {
        title,
        urlImage,
        genres,
        author: elementsArray[1]?.replace('Autor: ', '') || '',
        status: elementsArray[3]?.replace('Status: ', '') || '',
        chapters,
      },
    ];
  }
}

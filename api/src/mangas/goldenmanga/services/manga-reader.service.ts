import { FetchHelper, JSDOMHelper } from '@shared/helpers';
import { MangaReaderModel } from '@mangas/goldenmanga/models/goldenmanga.model';

interface MangaRequest {
  manga: string;
  chapter: string;
}

export class MangaReaderService {
  private baseUrl = 'https://goldenmanga.top';
  private fetch = new FetchHelper(this.baseUrl);

  public async handle({
    manga,
    chapter,
  }: MangaRequest): Promise<MangaReaderModel[]> {
    const data: string = await this.fetch.get(`/mangas/${manga}/${chapter}`);

    const document = new JSDOMHelper(data);

    const mangaData = document.getElement('#capitulos_images_webtonn center');

    return Array.from(mangaData?.querySelectorAll('img') || []).map(image => ({
      pageImageUrl: this.baseUrl + image?.getAttribute('src'),
      page: image?.getAttribute('pag'),
    }));
  }
}

export interface GenresModel {
  name: string;
  pageUrl: string;
}

export interface GenreModel {
  name: string;
  urlImage: string;
  pageUrl: string;
}

export interface MangaModel {
  title: string | null;
  urlImage: string | null;
  genres: Array<string | null>;
  author: string | null;
  status: string | null;
  chapters: Array<{
    chapter: string;
    pageUrl: string;
  }>;
}

export interface MangaReaderModel {
  pageImageUrl: string | null;
  page: string | null;
}

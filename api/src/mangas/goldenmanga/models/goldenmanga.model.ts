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
  title: string;
  urlImage: string;
  genres: string[];
  author: string;
  status: string;
  chapters: string[];
}

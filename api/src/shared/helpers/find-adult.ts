export interface GenresModel {
  name: string | null | undefined;
  pageUrl: string | null;
}

export function findAdult(
  genres: GenresModel[],
  adult: boolean,
): GenresModel[] {
  return adult
    ? genres
    : genres.filter(genre => !genre.name?.toLowerCase().includes('adulto'));
}

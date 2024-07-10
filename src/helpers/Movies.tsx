const SAVED_MOVIES_KEY = "SAVED_MOVIES_KEY";

export const getSavedMoviesFromStorage = (): Movie[] => {
  const savedMovies = localStorage.getItem(SAVED_MOVIES_KEY);
  return JSON.parse(savedMovies || "[]");
};

export const saveMoviesToStorage = (movies: Movie[]): void => {
  localStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(movies || []));
};

export const isMovieSaved = (
  moviesObj: Record<number, { index: number; movie: Movie }>,
  movieId: number,
): [boolean, number, Movie | null] => {
  const element = moviesObj[movieId];
  return [
    !!element,
    !!element ? element.index : -1,
    !!element ? element.movie : null,
  ];
};

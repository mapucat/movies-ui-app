import React, { useContext, useEffect, useState } from "react";
import {
  getSavedMoviesFromStorage,
  saveMoviesToStorage,
} from "../helpers/Movies";

export interface SavedMoviesProps {
  children: React.ReactNode;
}

type MovieObj = { index: number; movie: Movie };

export interface SavedMoviesState {
  movies: Movie[];
  moviesObj: Record<number, MovieObj>;
  setMovies: any;
}

const initialState: SavedMoviesState = {
  movies: [],
  moviesObj: {},
  setMovies: () => {},
};

export const SavedMoviesContext = React.createContext(initialState);

export function SavedMoviesProvider(props: SavedMoviesProps) {
  const [movies, setMovies] = useState<Movie[]>(getSavedMoviesFromStorage());
  const [moviesObj, setMoviesObj] = useState<Record<number, MovieObj>>([]);

  useEffect(() => {
    saveMoviesToStorage(movies);
    setMoviesObj(
      movies.reduce(
        (prev: Record<number, MovieObj>, curr: Movie, index: number) => ({
          ...prev,
          [curr.id]: { index, movie: curr },
        }),
        {},
      ),
    );
  }, [movies]);

  return (
    <SavedMoviesContext.Provider value={{ movies, moviesObj, setMovies }}>
      {props.children}
    </SavedMoviesContext.Provider>
  );
}

export const SavedMoviesConsumer = SavedMoviesContext.Consumer;

export function useSavedMovies() {
  return useContext(SavedMoviesContext);
}

import { ApiResponse, ErrorResponse } from "../types/Response";
import { useEffect, useState } from "react";

import axiosInstance from "../config/AxiosInstance";

export default function useSearchMovies(
  query: string,
): [Movie[], string, ErrorResponse | null] {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [status, setStatus] = useState("unloaded");
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    if (query) {
      requestMoviesList();
    } else {
      setStatus("unloaded");
      setMoviesList([]);
    }

    async function requestMoviesList() {
      setMoviesList([]);
      setStatus("loading");

      try {
        const res = await axiosInstance.get<ApiResponse>(
          `/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
        );
        setMoviesList(res.data.results);
        setStatus("loaded");
      } catch (err: any) {
        setStatus("error");
        setError(err as ErrorResponse);
      }
    }
  }, [query]);

  return [moviesList, status, error];
}

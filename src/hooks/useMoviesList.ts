import { ApiResponse, ErrorResponse } from "../types/Response";
import { useEffect, useState } from "react";

import axiosInstance from "../config/AxiosInstance";

export default function useMoviesList(
  sortBy: string = "popularity.desc",
): [Movie[], string, ErrorResponse | null] {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [status, setStatus] = useState("unloaded");
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    if (sortBy) {
      requestMoviesList();
    } else {
      setStatus("unloaded");
      setMoviesList([]);
    }

    async function requestMoviesList() {
      setMoviesList([]);
      setStatus("loading");

      try {
        const date = new Date();
        const res = await axiosInstance.get<ApiResponse>(
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortBy}&primary_release_date.lte=${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDay()).slice(-2)}`,
        );
        setMoviesList(res.data.results);
        setStatus("loaded");
      } catch (err: any) {
        setStatus("error");
        setError(err as ErrorResponse);
      }
    }
  }, []);

  return [moviesList, status, error];
}

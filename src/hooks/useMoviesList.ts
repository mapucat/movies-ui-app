import { useState, useEffect } from "react";
import axiosInstance from "../config/AxiosInstance";
import { ApiResponse } from "../types/Response";

export default function useMoviesList() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestMoviesList();

    async function requestMoviesList() {
      setMoviesList([]);
      setStatus("loading");
      const res = await axiosInstance.get<ApiResponse>(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      );
      setMoviesList(res.data.results);
      setStatus("loaded");
    }
  }, []);

  return [moviesList, status];
}

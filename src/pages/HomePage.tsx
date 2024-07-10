import React from "react";
import useMoviesList from "../hooks/useMoviesList";

const HomePage = () => {
  const [movies, state] = useMoviesList();

  return <>{/* { state } */}</>;
};

export default HomePage;

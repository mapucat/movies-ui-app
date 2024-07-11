import MoviesCarousel from "../components/movies/MoviesCarousel";
import useMoviesList from "../hooks/useMoviesList";

const HomePage = () => {
  const [movies, state] = useMoviesList();

  return (
    <>
      <MoviesCarousel
        title="Just released"
        sortBy="primary_release_date.desc"
      ></MoviesCarousel>
      <MoviesCarousel title="Popular of the week"></MoviesCarousel>
    </>
  );
};

export default HomePage;

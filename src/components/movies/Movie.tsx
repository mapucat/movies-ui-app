import { useMemo } from "react";
import styled, { css } from "styled-components";

import { useSavedMovies } from "../../context/SavedMoviesContext";
import { isMovieSaved } from "../../helpers/Movies";
import { devices } from "../../styles/settings/Breakpoints";
import { spacing } from "../../styles/settings/Spacing";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

type MovieProps = {
  movie: Movie;
};

const baseElementStyles = css`
  border-radius: 8px;
  width: 180px;
  height: 270px;
`;

const Wrapper = styled.article`
  ${baseElementStyles}

  & > img, & > div {
    ${baseElementStyles}
    position: absolute;
  }

  position: relative;

  div.movie__detailed-info {
    display: none;
  }
  div.movie__basic-info {
    display: block;
  }

  &:hover {
    div.movie__detailed-info {
      display: block;
    }
    div.movie__basic-info {
      display: none;
    }
  }
`;

const Poster = styled.img`
  z-index: 0;
  top: 0;
  left: 0;
`;

const BasicInfo = styled.div`
  z-index: 5;
  bottom: 0;
  left: 0;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6727065826330532) 100%,
    rgba(190, 190, 190, 0) 100%
  );

  padding: ${spacing[100]};
  box-sizing: border-box;

  span {
    font-weight: bold;
    display: block;
  }
`;

const DetailedInfo = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  padding: ${spacing[300]};
  box-sizing: border-box;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6727065826330532) 100%,
    rgba(190, 190, 190, 0) 100%
  );

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${devices.sm} {
    padding: ${spacing[100]};

    span {
      -webkit-line-clamp: 6;
    }
  }
`;

const imageUrl = "https://image.tmdb.org/t/p";

const Movie = ({ movie }: MovieProps) => {
  const handleSaveClicked = () => {
    if (isSaved) {
      movies.splice(index, 1);
      setMovies([...movies]);
    } else {
      setMovies([...movies, movie]);
    }
  };

  const { movies, moviesObj, setMovies } = useSavedMovies();
  const [isSaved, index] = useMemo(
    () => isMovieSaved(moviesObj, movie.id),
    [handleSaveClicked],
  );

  const movieName = movie.name || movie.title;

  if (!movie) {
    return <></>;
  }

  return (
    <Wrapper>
      <DetailedInfo className="movie__detailed-info">
        <h3>{movieName}</h3>
        <span>{movie.overview}</span>
        <div>
          <Button variant="icon" onClick={handleSaveClicked}>
            <Icon name={isSaved ? "saveFilled" : "save"}></Icon>
          </Button>
        </div>
      </DetailedInfo>

      <BasicInfo className="movie__basic-info">
        <span>{movieName}</span>
        <span>{movie.first_air_date}</span>
      </BasicInfo>

      <Poster src={`${imageUrl}/w185${movie.poster_path}`} />
    </Wrapper>
  );
};

export default Movie;

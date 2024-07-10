import styled from "styled-components";

import { devices } from "../../styles/settings/Breakpoints";
import { spacing } from "../../styles/settings/Spacing";
import Movie from "../movies/Movie";
import Icon from "../ui/Icon";

type SearchResultProps = {
  title: string;
  movies: Movie[];
  notFound: {
    useIcon: boolean;
    title: string;
    description: string;
  };
};

const NotFoundMessage = styled.section`
  svg {
    max-width: 300px;
  }
`;

const ResultSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[300]};
  justify-content: center;

  max-width: 1000px;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SearchResult = ({ title, movies, notFound }: SearchResultProps) => {
  if (!movies?.length) {
    return (
      <NotFoundMessage>
        {notFound.useIcon ? <Icon name="noData"></Icon> : null}
        <h2>{notFound.title}</h2>
        <p>{notFound.description} </p>
      </NotFoundMessage>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <ResultSection>
        {movies.map((movie: Movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ResultSection>
    </>
  );
};

export default SearchResult;

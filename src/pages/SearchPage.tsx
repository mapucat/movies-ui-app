import React, { useState } from "react";
import styled from "styled-components";

import SearchInput from "../components/search/SearchInput";
import SearchResult from "../components/search/SuccessResult";
import Loader from "../components/ui/Loader";
import useSearchMovies from "../hooks/searchMovies";
import { spacing } from "../styles/settings/Spacing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultWrapper = styled(Wrapper)`
  align-items: center;
  text-align: center;
  padding: ${spacing[400]} 0;
`;

const SearchInvite = () => {
  return (
    <>
      <h2>Looking for a movie? Just type in the title</h2>
    </>
  );
};

const SearchPage = () => {
  const [search, setSearch] = useState("");

  const [movies, state] = useSearchMovies(search);

  return (
    <Wrapper>
      <SearchInput onSearch={setSearch}></SearchInput>

      <ResultWrapper>
        {state === "unloaded" ? <SearchInvite /> : null}
        {state === "loading" ? <Loader /> : null}
        {state === "loaded" ? (
          <SearchResult
            title="Relevant Results"
            movies={movies}
            notFound={{
              useIcon: true,
              title: "Sorry, no results were found.",
              description:
                "Check your spelling or try searching for something else.",
            }}
          ></SearchResult>
        ) : null}
      </ResultWrapper>
    </Wrapper>
  );
};

export default SearchPage;

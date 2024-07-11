import { useState } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

import useMoviesList from "../../hooks/useMoviesList";
import { breakpoints } from "../../styles/settings/Breakpoints";
import { spacing } from "../../styles/settings/Spacing";
import Movie from "./Movie";

import "react-multi-carousel/lib/styles.css";

export interface MoviesCarouselProps {
  title: string;
  sortBy?: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: breakpoints.md },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: breakpoints.md, min: breakpoints.sm },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: breakpoints.sm, min: 0 },
    items: 1,

    partialVisibilityGutter: 40,
  },
};

const Section = styled.section`
  padding-top: ${spacing[300]};
  padding-bottom: ${spacing[300]};
`;

const MoviesCarousel = ({ title, sortBy }: MoviesCarouselProps) => {
  const [movies, state, error] = useMoviesList(sortBy);

  return (
    <Section>
      <h2>{title}</h2>
      <Carousel
        arrows={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={1000}
        centerMode={true}
        shouldResetAutoplay={true}
        slidesToSlide={1}
      >
        {movies.slice(0, 10).map((movie: Movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </Section>
  );
};

export default MoviesCarousel;

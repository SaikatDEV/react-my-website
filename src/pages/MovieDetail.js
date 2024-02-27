import React, { useState, useEffect } from "react";
import styled from "styled-components";
// This below property, the react hook which will help to get the url path from Browser
import { useLocation } from "react-router-dom";

import { MovieState } from "../movieState";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // This below will only run, as soon as the component is mounted
  //   As well i want to run the useEffect while Movies updates and url updates.
  useEffect(() => {
    const currentMovie = movies.filter((eachMovie) => eachMovie.url === url);
    //   We can set the movie now to currentMovie
    setMovie(currentMovie[0]);
    // console.log("----------------" + movie);
  }, [movies, url]);
  //   console.log("----------------" + movie);
  return (
    //   Add fraction, So react doesnt err out and add logic
    <>
      {movie && (
        <StyledDetail>
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((eachAward) => (
              <Award
                title={eachAward.title}
                description={eachAward.description}
                key={eachAward.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="Image Secondary" />
          </StyledImageDisplay>
        </StyledDetail>
      )}
    </>
  );
};

// This is another component => Award component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledDetail = styled.div`
  color: white;
  padding-bottom: 10rem;
`;

const StyledHeadLine = styled.div`
  min-height: 90vh;
  //   Whenever we add "relative" in the parent,
  //   actually we will move the children using "relative"
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    // So the h2 is moving diff area
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h2 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;

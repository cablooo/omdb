import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchSearch } from '../Actions/movieAction';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { inputVal } = useSelector(state => state.movie);
  const { id } = useParams();
  const movieArr = inputVal ? inputVal.inputVal : null;

  useEffect(() => {
    if (!movieArr) {
      dispatch(fetchSearch(id));
    }
  }, [dispatch, id, movieArr]);

  const movie = movieArr ? movieArr.find(movie => movie.imdbID === id) : null;

  return (
    <StyledMovieDetail id='movie-detail'>
      {movie ? (
        <div className='container'>
          <div className="detail-container">
            <div className="imgDiv">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="textDiv">
              <h1>{movie.Title}</h1>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </StyledMovieDetail>
  );
};

const StyledMovieDetail = styled(motion.div)`
  color: #f1f1f1;
  text-align: center;
  background: #070B11;
  min-height: 50vh;
  width: 100%;

  .detail-container {
    display: flex;
    justify-content: space-around;
    
    align-items: center;
    padding: 2rem;

    img {
      border-radius: 20px;
    }
  }
`;

export default MovieDetails;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from '../Actions/movieAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Movie from './Movie';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {fadeIn} from '../animations'

const Home = () => {


  const dispatch = useDispatch();
  const {inputVal} = useSelector((state) => state.movie)
  const [inputText, setInputText] = useState('')
  
  useEffect(() => {
    dispatch(fetchSearch(inputText))
  }, [dispatch])

    const movieArr = inputVal.inputVal;

    const handleChange = (e) => {
        setInputText(e.target.value)
        if (e.code === "Enter") {
          e.preventDefault()
          dispatch(fetchSearch(inputText))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(inputText))
    }

  return (
    <StyledHome>
        <div className="inputDiv">
          <input onKeyDown={handleChange} value={inputText} type="text" onChange={handleChange} />
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit}/>
        </div>

        {movieArr === undefined ?(
          ""
        ) : 
          <StyledMovieList  variants={fadeIn} initial="hidden" animate="show">
            
              {movieArr.map((mov, index) => (
                <Link to={`/movie/${mov.imdbID}`}>
                  <Movie 
                  key={index}
                  layoutId={mov.Title}
                  img={mov.Poster}
                  title={mov.Title}
                  year={mov.Year}
                  type={mov.Type}
                  />
                </Link>
                
              ))}
          </StyledMovieList>

        }

    </StyledHome>
  )
}

const StyledHome = styled(motion.div)`
  color: #f1f1f1;
  text-align: center;
  min-height: 50vh;
  width: 100%;

  h1 {
    padding-top: 3rem;
    font-size: 3rem;
  }

  .inputDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
  }

  input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }

    svg {
        padding: 0.89rem;
        border: none;
        cursor: pointer;
        background: #A4BF43;
        color: white;
    }

`

const StyledMovieList = styled(motion.div)`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  margin: 5rem auto 0;
  padding-bottom: 5rem;
`

export default Home
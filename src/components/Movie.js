import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Movie = ({img, title, year, type}) => {
  return (
    <StyledMovie>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
      </div>
    </StyledMovie>
  )
}

const StyledMovie = styled(motion.div)`
  background: #0E1723;
  text-align: center;
  padding: 10px 5px;
  border-radius: 1rem;
  cursor: pointer;

  img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`

export default Movie
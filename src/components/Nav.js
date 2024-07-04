import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav id='nav'>
        <div className="container">
            <h1><Link to="/omdb">Omdb</Link></h1>
            <ul>
                <li><Link to="https://github.com/cablooo">Github</Link></li>
            </ul>
        </div>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
    min-height: 10vh;
    margin: auto;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 3.5rem;
            font-weight: 500;
            cursor: pointer;
        }

        ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 60%;
            li {
                    padding: 1rem;
                    font-size: 1.5rem;
                    cursor: pointer;
                    &::after {
                    content: '';
                    display: block;
                    width: 0%;
                    height: 3px;
                    background: #fff;
                    z-index: 22;
                    -webkit-transition: ease-out all .3s;
                    transition: ease-out all .3s;
                    margin-top: 3px;
                }
                &:hover {
                    &::after {
                        width: 100%;
                    }
                }
            }
        }
    }
`

export default Nav
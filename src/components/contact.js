import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <StyledContact id='contact'>
        <div className="text-box">
            <h1>Contact 👋</h1>
            <p className="desc">
                Just a simple website about movies also games don't know why 😂<br/>
                <span>📧 E-mail: yosking22@gmail.com</span>
            </p>
        </div>

        <div className="icons">
            <h2>Follow us on:</h2>
            <motion.div className="icon" whileHover={{scale: 1.2}}>  
                <a href='https://www.instagram.com/i_cabloi/?hl=en'><FontAwesomeIcon transform="grow-10" icon={faInstagram}/></a>
                <a href='https://github.com/cablooo'><FontAwesomeIcon transform="grow-10" icon={faGithub}/></a>
            </motion.div>
        </div>

        <div className="footer">
            <h3>all the copyrights gose to <a href="https://www.omdbapi.com/">Omdb</a><span>&copy;</span></h3>
            <h4>This website developed by: <a href="https://github.com/cablooo">Cablo</a></h4>
        </div>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 3rem;
    padding: 0 5rem 3rem;
    min-height: 30vh;

    a {
        text-decoration: underline;
    }

    .text-box {
        p {
            width: 60%;
        }
    }

    .icons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        .icon {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            height: 60%;
        }

        svg {
            cursor: pointer;
        }
    }

    .footer {
        grid-column: 1 / span 2;
        text-align: center;
    }

    
`

export default Contact
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
    }

    html {

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background: darkgray;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }   
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: #f1f1f1;
        background: #070B11;
        width: 100%; 
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        outline: none;
    }

    img {
        display: block;
    }

    h2, h1 {
        font-size: 3rem;
        font-family: "Montserrat", sans-serif;
        font-weight: lighter;
        color: #f1f1f1;
    }

    h3 {
        font-size: 1.3rem;
        color: #f1f1f1;
        padding: 1.5rem 0;
    }

    .container {
        width: 80%;
        margin: auto;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #f1f1f1;
    }

    a {
        text-decoration: none;
        color: #f1f1f1;
    }

    // Hell =>
    
    @media screen and (max-width: 1500px) {
        
        #movie-detail {
            .detail-container {
                flex-direction: column;

                .textDiv {
                    margin-top: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 950px) {

        #nav {
            
            .container {
                flex-direction: column;
            }
        }


        #contact {
            display: flex;
            flex-direction: column;

            .text-box {
                text-align: center;

                p {
                    width: 100%;
                }
            }

            .icons {
                flex-direction: row;
                align-items: center;
                justify-content: center;

                .icon {
                    margin-left: 20px;
                    flex-direction: row;
                }
            }
        }
    }
`;

export default GlobalStyles
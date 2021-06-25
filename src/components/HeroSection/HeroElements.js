import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { keyframes } from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    //background: linear-gradient(to bottom, black 2.5%, blue);
    height: 100%;
    z-index: 1;
`;
export const HeroHome = styled.section`
    background: blue;
    margin-top: 2.5vh;
    height: 100vh;
    border-top-left-radius: 35%;
    border-top-right-radius: 35%;
`;

export const Logos = styled.div`
    position: absolute;
    z-index: 5;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    width: 15%;
    transform: translate(-50%, -100%);
`;   

let discover = keyframes`
    0% {
        opacity: 0;
    }
    95%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const Laptop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -45%);

    width: 135vh;
    @media screen and (max-width: 1500px){
        width: 100%;
    }
    @media screen and (max-height: 600px){
        width: 30%;
        margin-top: 50px;
    }
    @media screen and (max-height: 600px) and (max-width: 968px){
        width: 52.5%;
        margin-top: 15px;
    }
    .notebook{
        pointer-events: none;
/*  
        @media screen and (max-width: 1750px){
            width: 750px;
        }

        @media screen and (max-width: 1050px){
            width: 750px;
        }

        @media screen and (max-width: 750px){
            width: 550px;
        }

        @media screen and (max-width: 400px){
            display: none;
        } */
    }

    
    .bg{
        min-width: 250px;
        position: absolute;
        border: 0;
        width: 77%;
        height: 75%;
        z-index: 5;
        top: 45%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
        border-radius: 7px;
        animation: ${discover} 4.3s;
        pointer-events: none;
    }
/* 
    position: realtiva;
    max-width: 1450px;
    //margin: 50%;
    width: 75%;
    z-index: 3;

    .notebook{
        //width: 150%;
        //margin-top: 50%;
        //margin-left: -25%;
        //height: auto;
    } */
`;


let loading = keyframes`
    from { 
        width: 0%;
    }
    to {
        width: 100%;
    }
`;
let hide = keyframes`
    0% {
        opacity: 1;
    }
    95%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

export const LogoLoading = styled.div`
    animation: ${hide} 4.1s;
    opacity: 0;
    pointer-events: none;
`;

export const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25%;
    height: 1%;
    transform: translate(-50%, 750%);
    transition: all-in-out all 0.2s;
    //transition: background-position 1s;
    background-color: #404040;
    border-radius: 25px;

    &:after{
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        float: left;
        background-color: #fff;
        border-radius: 25px;
        animation: ${loading} 3.5s linear;
    }
`;

export const Terminal = styled.div`

`;

export const TerminalBg = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 7px;
    transform: translate(-50%, -60%);
    transition: all-in-out all 0.2s;
    animation: ${discover} 6.5s;


    @media screen and (max-width: 1920px){
        width: 50%;
        height: 50%;
        transform: translate(-50%, -57.5%);
    }

    @media screen and (max-width: 810px){
        width: 75%;
        height: 70%;
    }

    @media screen and (max-height: 600px){
        width: 75%;
        height: 70%;
        transform: translate(-50%, -57.5%);
    }

    @media screen and (orientation: horizontal){
        width: 75%;
        height: 70%;
        transform: translate(-50%, -57.5%);
    }
`;

export const TerminalText = styled.div`
    color: #00ff00;
    font-family: 'Cascadia';
    font-size: 1.8vh;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    z-index: 11;
    transform: translate(-48%, -55%);
    text-align: left;
    animation: ${discover} 6.5s;

    @media screen and (max-width:1500px){
        font-size: 1.32vw;
    }
    @media screen and (max-width: 810px){
        font-size: 1.9vw;
        transform: translate(-70%, -70%);
    }

    @media screen and (max-height: 600px){
        font-size: .575vw;
        transform: translate(-70%, -70%);
    }

    @media screen and (max-height: 600px) and (max-width: 968px){
        font-size: 1vw;
        transform: translate(-70%, -70%);
    }

    .TerminalAnswer:active{
        display: none;
    }
`;

export const TerminalHostname = styled.h5`
    font-size: 1.5vw;
    font-weight: bold;
    color: yellow;

    @media screen and (max-height: 600px){
        font-size: 1vw;
    }
    @media screen and (max-width: 810px){
        font-size: 2.9vw;
    }
`;

export const TerminalPacman = styled.div`
    .Typewriter__cursor{
        background-color: #00ff00;
    }
`;


let jump = keyframes`
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-15px);
    }
    100%{
        transform: translateY(0);
    }
`;

export const DownArrows = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 95%;
    left: 50%;
    transition: ease-in-out all 5s;
    animation: ${jump} 1.5s infinite normal;
`;

let raimbow = keyframes`
    0% {
        border-bottom-color: red;
        border-right-color: red;
    }
    50% {
        border-bottom-color: #00ff00;
        border-right-color: #00ff00;
    }
    90% {
        border-bottom-color: #f400a1;
        border-right-color: #f400a1;
    }
    100% {
        border-bottom-color: red;
        border-right-color: red;
    }
`;

export const DownArrow = styled.div`
    width: 15px;
    height: 15px;
    border-bottom: 5px solid;
    border-right: 5px solid;
    transform: rotate(45deg);

    animation: ${raimbow} 5s infinite;
`;

export const HeroDownload = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: blue;
    height: 65vh;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;

    @media screen and (max-height: 600px){
        height: 150vh;
    }
    @media all and(orientation: landscape){
        width: 150vh;
    }
`;

export const ArchLogos = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const KdeLogo = styled.img`
    width: 15%;

    @media screen and (max-width: 768px){
        width: 25%;
    }
`;
export const Pacman = styled.img`
    width: 15%;

    @media screen and (max-width: 768px){
        width: 25%;
    }
`;
export const Arch = styled.img`
    width: 15%;

    @media screen and (max-width: 768px){
        width: 25%;
    }
`;

export const DownloadBtn = styled.button`
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: black;
    outline: none;
    border: none;
    background-color: red;
    cursor: pointer;

    @-moz-document url-prefix() {
        letter-spacing: 1.5px;
    }
`;

export const DownloadBtnLink = styled(LinkR)`
    display: flex;
    position: relative;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -550%); */
    cursor: pointer;
    padding: 15px 25px 15px 25px;
    border-radius: 15px;
    background-color: red;
    outline: none;
    border: none;
    transition: ease-in-out all 0.25s;
    box-shadow: 0 0 5px 3px yellow;
    width: 277px;
    text-decoration: none;

    &:hover{
        transition: ease-in-out all 0.25s;
        //transform: scale(0.99) translate(-50%, -550%);
        box-shadow: 0 0 5px 3px grey;
    }

    @media screen and (max-width: 1500px){
        margin-top: 50px;
    }
`;

export const DownloadText = styled.div`
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 1rem;
    justify-content: center;
    margin-top: 50px;

    width: 37.5%;
    @media screen and (max-width: 1500px){
        font-size: 0.9rem;
        width: 60%; 
    }

    @media screen and (max-width: 1024px){
        font-size: 0.9rem;
        width: 60%;
    }

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
        width: 67%;
    }


    @media screen and (max-width: 480px){
        font-size: 0.9rem;
        width: 90%;
    }

    background-color: rgba(0,0,0,0.75);
    color: white;
    padding: 25px 25px 25px 25px;
    border: none;
    border-radius: 25px;
    outline: none;
`;
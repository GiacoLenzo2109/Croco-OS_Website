import react from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const DownloadSection = styled.div`
    display: block;
`;

export const DownloadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 72vh;

    border-radius: 35%;
    margin-top: 25px;
    //background-color: #6600cc;

    padding: 50px;
`;

export const DownloadTitle = styled.h1`
    color: yellow;
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 50px;

    @media screen and (max-width: 1076px){
        font-size: 35px;
    }

    @media screen and (max-width: 768px){
        font-size: 25px;
    }
`;

export const DownloadMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 50%;
    justify-content: space-between;

    margin-top: 100px;

    @media screen and (max-width: 1076px){
        flex-direction: column;
    }
`;

export const DownloadIcon = styled.img` 
    width: 350px;
`;

export const DownloadBtnLink = styled(Link)` 

`;

export const DownloadBtn = styled.button` 
    font-family: "Cascadia";
    font-size: 1.25rem;
    font-weight: bold;

    color: yellow;
    background-color: black;

    height: 50px;
    width: 250px;
    cursor: pointer;
    border-radius: 25px;
    border: 2.5px solid yellow;

    transition: ease-in-out all 0.3s;

    @media screen and (max-width: 1076px){
        margin-top: 50px;
    }

    &:hover {
        transition: ease-in-out all 0.3s;
        transform: scale(.95);
        background-color: #111111;
    }
`;
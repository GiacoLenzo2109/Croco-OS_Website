import react from 'react';
import styled, { keyframes } from 'styled-components';

export const AboutSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75vh;
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75vh;
    padding: 50px;
`;

export const AboutTitle = styled.h5`
    color: yellow;
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 50px;
    margin-top: 50px;



    @media screen and (max-width: 1076px){
        font-size: 35px;
    }

    @media screen and (max-width: 768px){
        font-size: 25px;
    }
`;

export const AboutTeam = styled.div`
    display: flex;
`;


export const MemberImg = styled.img`
    width: 250px;

    transition: ease-in-out all 0.25s;
`;

export const MemberName = styled.h3`
    color: coral;
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 25px;

    cursor: default;

    @media screen and (max-width: 1076px){
        font-size: 20px;
    }
`;

export const MemberDesc = styled.div`
    color: white;
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 15px;
    display: none;
    opacity: 0;
`;

let discoverMember = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const Member = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    border: 5px solid #1F1F1F;
    border-radius: 25px;
    padding: 25px;

    transition: ease-in-out all 0.25s;

    &:hover{
        transition: ease-in-out all 0.25s;
        box-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;

        ${MemberImg}{
            transform: translate(-50%, 0%);
            transform: rotate(25deg);
        }

        ${MemberName}{
            color: yellow;
        }

        ${MemberDesc}{
            display: block;
            animation: ${discoverMember} linear 1s;
            opacity: 1;
        }
    }
`;

export const MemberContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
`;


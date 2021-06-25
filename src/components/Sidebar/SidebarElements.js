import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    transition: 0.5s ease-in-out;
    position: fixed;
    z-index: 50;
    width: 100%;
    height: 100%;
    transform: translate(0%,);
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`;

/* export const CloseIcon = styled(FaTimes)`
    
    color: #ff5555;
`; */

export const SidebarWrapper = styled.div`
    display: inline-block;
    align-items: center;
    text-align: center;
    margin: 0 auto;
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 3.5rem;
    cursor: pointer;
    color: white;
    font-family: 'Junegull';
    font-size: 35px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    justify-content: center;

    @media screen and (max-width: 450px){
        font-size: 25px;
    }

    @media screen and (max-height: 550px){
        font-size: 25px;
        padding: 2.5rem;
    }

    @media screen and (max-height: 450px){
        font-size: 17px;
        padding: 1.5rem;
    }

    @media screen and (max-height: 350px){
        font-size: 17px;
        padding: 1rem;
    }

    @media screen and (max-width: 350px){
        font-size: 17px;
        padding: 1.5rem;
    }

    &:hover {
        color: #ff0000;
        transform: scale(1.25);
    }
`;

export const SidebarMenu = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
`;

export const SidebarBtn = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const SidebarBtnLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 3.5rem;
    //justify-content: center;
    cursor: pointer;
    //margin: 0 auto;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.5);
    }


    @media screen and (max-height: 450px){
        padding: 1rem;
        margin-bottom: -45%;
    }
`;

export const HamburgerMenu = styled.button`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: yellow;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        z-index: 100;
        padding: 0;
        justify-content: space-around;
        outline: none;

        div {
            width: 2rem;
            height: 0.25rem;
            background: ${({ isOpen }) => (isOpen ? '#ff0000' : '#ffff00')};
            border-radius: 100px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        
            :first-child {
              transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
            }
        
            :nth-child(2) {
              opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
              transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
            }
        
            :nth-child(3) {
              transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
            } 
        }
    }
`;
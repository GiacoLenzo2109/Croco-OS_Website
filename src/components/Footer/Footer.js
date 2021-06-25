import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Footer = styled.div`
    display: block;
    border-top: 3px solid grey;
    background-color: black;
    margin-top: 75px;
    height: 75px;
`;

export const FooterContainer = styled.div`

`;

export const FooterText = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 1rem;
    color: grey;

    padding: 15px;
`;

export const DonationsBtn = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: black;
`;

export const DonationsLink = styled(LinkS)`
    font-family: "Cascadia";
    font-weight: bold;
    font-size: 1rem;
    color: grey;

    &:hover{
        text-decoration: underline;
    }
`;

export default Footer
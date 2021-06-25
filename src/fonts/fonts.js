import junegull from '../fonts/junegull.ttf';
import cascadia from '../fonts/Cascadia.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'Junegull';
    src: local('Junegull'),
    url(${ junegull }) format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Cascadia';
    src: local('Cascadia'),
    url(${ cascadia }) format('truetype');
    font-weight: 300;
    font-style: normal;
}
`;


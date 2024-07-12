import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Andika';
        src: url('../../fonts/Andika-Regular.ttf') format('truetype');
        font-display: swap;
    };
`;

export default FontStyles;

import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Andika-It';
        src: url('../../../public/fonts/Andika-Italic.ttf') format('truetype');
        font-display: swap;
    };
    @font-face {
        font-family: 'Andika';
        src: url('../../../public/fonts/Andika-Regular.ttf') format('truetype');
        font-display: swap;
    };
`;

export default FontStyles;

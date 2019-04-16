import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// tslint:disable-next-line
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input,
    button {
        &:focus,
        &:active{outline:none}
    }
`;

export default GlobalStyles;
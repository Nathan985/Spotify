import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white);
    }
    
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple--apple-system, BlinkMacSystemFont, sans-serif, system-ui
    }
    html{
        background: var(--white)
    }
    :root{
        --dark: #000000;
        --white: #fff;
        --primary: #CB1582;
        --secondary: #1ED760;
        --gray: #616467;
        --header: #0000007e;
        --blue-light: #A5FFEF;
    }
`;
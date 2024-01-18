import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --Grayscale-10: #ffffff;
        --Grayscale-20 : #F9F9F9;
        --Grayscale-30: #CFCFCF;
        --Grayscale-40 : #818181;
        --Grayscale-50: #515151;
        --Grayscale-60: #000;
        --Brown-10: #F5F1EE;
        --Brown-20: #E4D5C9;
        --Brown-30: #C7BBB5;
        --Brown-40: #542F1A;
        --Brown-50: #341909;
        --Blue-50: #1877F2;
        --Yellow-50: #FEE500;
        --Red-50: #B93333;
    }
    *{
        box-sizing: border-box;
        margin : 0;
    }
    html,
    body {
        font-size: 62.5%;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Pretendard;
        font-style: normal;
        line-height: normal;
    }
    h1 {
        font-size: 40px;
        font-weight: 400;
    }
    h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
    }
    h3 {
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
    }
    a {
    text-decoration: none;
    cursor: pointer;
    }

    input {
    outline: none;
    border: none;
    }

    li {
    list-style: none;
    }
    button {
    background: none;
    border: 0;
    cursor: pointer;
    }
`;

export default GlobalStyle;

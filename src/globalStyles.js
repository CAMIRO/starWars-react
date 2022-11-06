import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DIN','Helvetica','Arial', san-serif;
    color: #ddd;
    background: #000;
    background-image: url(${require(`./images/stars.png`)}); 
    background-size: "cover";
    z-index: 0;
}
`;

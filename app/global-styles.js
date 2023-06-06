import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    position: fixed;
  }

  body {
    font-family: 'Lato';
  }

  body.fontLoaded {
    font-family: 'Lato';
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: 'Lato';
    line-height: 1.5em;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
`;

export default GlobalStyle;

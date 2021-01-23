import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    background: ${(props) => props.theme.colors.iceWhite};
    color: ${(props) => props.theme.colors.darkBlue};
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    font-weight: 300;
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
  }
`;

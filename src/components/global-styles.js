import { injectGlobal } from "styled-components";

export default () => injectGlobal`
  @font-face {
     font-family: 'Circe-Regular';
     src: url('./assets/Circe-Regular.ttf');
  }
  html {
      font-family: 'Circe-Regular';
  }
`;

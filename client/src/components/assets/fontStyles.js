import { createGlobalStyle } from "styled-components";
import Fredoka from "./fonts/fredoka-v9-latin-regular.woff";
import Fredoka2 from "./fonts/fredoka-v9-latin-regular.woff2";

export default createGlobalStyle`
@font-face {
  font-family: 'Fredoka';
  src: url(${Fredoka2}) format('woff2'),
       url(${Fredoka}) format('woff');
}

body {
  font-family: 'Fredoka', sans-serif;
}
`;

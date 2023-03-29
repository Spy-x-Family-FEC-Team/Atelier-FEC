import { createGlobalStyle } from "styled-components";
import Biryani from "./fonts/biryani-v13-latin-regular.woff";
import Biryani2 from "./fonts/biryani-v13-latin-regular.woff2";

export default createGlobalStyle`
@font-face {
  font-family: 'Biryani';
  src: url(${Biryani2}) format('woff2'),
       url(${Biryani}) format('woff');
}

body {
  font-family: Biryani, sans-serif;
}
`;

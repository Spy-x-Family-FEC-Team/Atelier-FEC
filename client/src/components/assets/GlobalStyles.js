import { createGlobalStyle } from "styled-components";
import Biryani from "./fonts/biryani-v13-latin-regular.woff";
import Biryani2 from "./fonts/biryani-v13-latin-regular.woff2";



/*
This is a global style, it is equivalent to a global CSS document for us, but able to import variables and such.
Please be conservative about defaulting things, and where possible have one 'default' css style for one type of dom element (div, p, h1, etc.), and then use styled components to override that.
Classes should be used only in cases where there are more than one default style for one component, and where those different styles are not regionalized. (i.e. there are several different looks to different h2's, and it's not just that reviews h2's and QnA h2's are different)
*/
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

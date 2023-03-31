import { createGlobalStyle } from "styled-components";
import Biryani from "./fonts/biryani-v13-latin-regular.woff";
import Biryani2 from "./fonts/biryani-v13-latin-regular.woff2";
import BiryaniCss from "./fonts/biryaniCss.js"

const Colors = {
  night: "#171615",
  brunswick: "#23493f",
  persian: "#32998b",
  verdegris: "#4eaeb6",
  lightBlue: "#a7d4d9",
  snow: "#fffafb"
}

/*
This is a global style, it is equivalent to a global CSS document for us, but able to import variables and such.
Please be conservative about defaulting things, and where possible have one 'default' css style for one type of dom element (div, p, h1, etc.), and then use styled components to override that.
Classes should be used only in cases where there are more than one default style for one component, and where those different styles are not regionalized. (i.e. there are several different looks to different h2's, and it's not just that reviews h2's and QnA h2's are different)
*/

console.log(Biryani)

export default createGlobalStyle`
${BiryaniCss}

body {
  font-family: Biryani, sans-serif;
  font-weight: 300;
}


h1 {
  font-family: Georgia;
  font-weight: bold;
  font-size: 3.6rem;
  margin: 0;
  color: ${Colors.brunswick};
}

h2 {
  font-weight: 700;
  font-size: 2.4rem;
  margin: 0;
  color: ${Colors.brunswick};
}

h3 {
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
  color: ${Colors.brunswick};
}

h4 {
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  color: ${Colors.brunswick};
}

div {
  color: ${Colors.night};
}

button {
  font-family: Biryani;
  margin: 2.5vh 0.5vw 2.5vh 0.5vw;
  font-size: 1.1rem;
  padding: 1vh 0.7vw;
  border-radius: 0.5vw;
  background-color: ${Colors.brunswick};
  color: ${Colors.snow};
  font-weight: bold;
  border:none;
  cursor: pointer;
  box-shadow: 0.2vw 0.4vh 0.1vw ${Colors.night};
}

button:active {
  margin: 2.9vh 0.5vw 2.5vh 0.7vw;
  box-shadow: none;

}

.JenessaSocial {
  color:#329FA9;
}

select {
  font-size: 1.1rem;
  padding: 2px 5px;
  border-color: #A7D4D9;
  color: #23493F;
  border-radius: 6px;
  margin:5px;
  height:30px;
}
`;


export {Colors}
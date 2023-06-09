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
  snow: "#FDFBFF"

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
  color: ${Colors.night};
  background-color: ${Colors.snow}
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
  color: ${Colors.night};
}

// div {
//   color: ${Colors.night};
// }

i {
  font-weight: 200;
}

button {
  font-family: Biryani;
  font-size: 1.1rem;
  padding: 1vh 0.7vw;
  border-radius: 0.5vw;
  background-color: ${Colors.brunswick};
  color: ${Colors.snow};
  font-weight: bold;
  border:none;
  cursor: pointer;
  box-shadow: 0.2vw 0.4vh 0.15vw ${Colors.night};
}

button:active {
  margin: 0.4vh 0vw 0vh 0.2vw;
  box-shadow: none;

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

fieldset {
  all: unset;
}

textarea {
  all: unset;
  border: 1px solid ${Colors.verdegris};
  border-radius: 0.3rem;
}
`;


export {Colors}
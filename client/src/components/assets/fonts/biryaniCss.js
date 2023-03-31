import Biryani200wt from "./biryani-v13-latin-200.woff";
import Biryani200wt2 from "./biryani-v13-latin-200.woff2";
import Biryani300wt from "./biryani-v13-latin-300.woff";
import Biryani300wt2 from "./biryani-v13-latin-300.woff2";
import Biryani from "./biryani-v13-latin-regular.woff";
import Biryani2 from "./biryani-v13-latin-regular.woff2";
import Biryani600wt from "./biryani-v13-latin-600.woff";
import Biryani600wt2 from "./biryani-v13-latin-600.woff2";
import Biryani700wt from "./biryani-v13-latin-700.woff";
import Biryani700wt2 from "./biryani-v13-latin-700.woff2";
import Biryani800wt from "./biryani-v13-latin-800.woff";
import Biryani800wt2 from "./biryani-v13-latin-800.woff2";
import Biryani900wt from "./biryani-v13-latin-900.woff";
import Biryani900wt2 from "./biryani-v13-latin-900.woff2";

export default `/* biryani-200 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 200;
  src: url(${Biryani200wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani200wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-300 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 300;
  src: url(${Biryani300wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani300wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 400;
  src: url(${Biryani2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-600 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 600;
  src: url(${Biryani600wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani600wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 700;
  src: url(${Biryani700wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani700wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-800 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 800;
  src: url(${Biryani800wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url(${Biryani800wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* biryani-900 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Biryani';
  font-style: normal;
  font-weight: 900;
  src:  url(${Biryani900wt2}) format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
        url(${Biryani900wt}) format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}`
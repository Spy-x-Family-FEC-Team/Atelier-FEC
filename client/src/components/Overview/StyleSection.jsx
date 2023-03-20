import React, {useState} from 'react';
import styled from 'styled-components';
import StyleAndPrice from './StyleAndPrice.jsx';
import SizeAndQuantity from './SizeAndQuantity.jsx';
import BagAndLiked from './BagAndLiked.jsx';

const StyleSectionWrapper = styled.section`
  background: pink;
  height:100%;
  display: grid;
  grid-template-rows: 50% 25% 25%;
`;

const StyleSection = (props) => {

  const makeThumbnailsList = function (stylesObj) {
    var thumbnails = [];
    stylesObj.results.forEach((style) =>{
      var thisURL = style.photos[0].thumbnail_url;
      console.log('thisURL: ',thisURL);
      thumbnails.push(thisURL);
      // TODO: Change this 0 to main image id later.
    });
    console.log("thumbnails: ", thumbnails);
    return thumbnails;
  };

  var styleThumbnails = makeThumbnailsList(props.stylesForThisProduct);
  console.log('styleThumbnails: ', styleThumbnails);
  // const [styleThumbnails, setStyleThumbnails] = useState(makeThumbnailsList(props.stylesForThisProduct));

  return(
    <div>
     <StyleSectionWrapper>
      <StyleAndPrice
        styleThumbnails={styleThumbnails}
        handleStyleSelection={props.handleStyleSelection}/>
      <SizeAndQuantity />
      <BagAndLiked />
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;
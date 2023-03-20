import React, {useState} from 'react';
import styled from 'styled-components';

const StyleSectionWrapper = styled.section`
  background: pink;
  height:100%;
`;

const StyleSection = (props) => {

  return(
    <div>
     <StyleSectionWrapper>
      <StyleAndPrice />
      <SizeAndQuantity />
      <BagAndLiked />
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;
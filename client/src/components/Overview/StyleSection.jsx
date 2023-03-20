import React, {useState} from 'react';
import styled from 'styled-components';

const StyleSectionWrapper = styled.section`
  background: pink;
  height: 35vh;
`;

const StyleSection = (props) => {

  return(
    <div>
     <StyleSectionWrapper>
      Style section will go here.
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;
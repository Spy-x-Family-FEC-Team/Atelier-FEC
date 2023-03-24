import React, {useState} from 'react';
import styled from 'styled-components';

const StyledExpandedWrapper = styled.section`
  position: relative;
`;

const StyledCloseButton = styled.section`
  position:absolute;
  top:3px;
  right:3px;
`;

const Expanded = (props) => {



  return(
    <StyledExpandedWrapper>
      <StyledCloseButton>
        <button
          onClick={props.toggleExpanded}
        >
          X
        </button>
      </StyledCloseButton>

    </StyledExpandedWrapper>
  );
};

export default Expanded;
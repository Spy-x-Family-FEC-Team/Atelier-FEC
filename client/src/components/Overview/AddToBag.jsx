import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular,  icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled from 'styled-components';

const StyledBagWrapper = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
`;

const StyledBagButton = styled.section`
  margin:4px;
  font-size: 1.3rem;
    padding: 8px 25px;
    border-radius: 6px;
    background-color: #551a8b;
    color: white;
    font-weight: bold;
    border:none;
`;

const AddToBag = (props) => {

  return(
    <StyledBagWrapper>
      <StyledBagButton
          onClick={() => {
            props.handleClick()
          }}
        >
          Add to bag
        </StyledBagButton>
    </StyledBagWrapper>
  )
}

export default AddToBag;
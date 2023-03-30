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
  font-size: 1.2rem;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #23493F;
    color: white;
    font-weight: bold;
    border:none;
    height:28px;
    cursor: pointer;
    filter: drop-shadow(0.5rem 0.5rem 0.5rem gray);
`;

const AddToBag = (props) => {

  return(
    <StyledBagWrapper>
      <StyledBagButton
          className="JenessaAddToBag"
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
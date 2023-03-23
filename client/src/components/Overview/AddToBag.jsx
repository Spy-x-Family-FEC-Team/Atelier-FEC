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
`;

const AddToBag = (props) => {

  return(
    <StyledBagWrapper>
      <StyledBagButton>
        <button>
          Add to bag +
        </button>
        </StyledBagButton>
    </StyledBagWrapper>
  )
}

export default AddToBag;
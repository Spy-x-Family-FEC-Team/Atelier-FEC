import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled from 'styled-components';

const StyledLikedWrapper = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
`;

const StyledLikeButton = styled.section`
  margin:4px;
`;

const Liked = (props) => {
  // All this does is toggle between solid and regular.
  return(
    <StyledLikedWrapper>
      <StyledLikeButton>
      <button
        onClick = {props.handleClick}
      >
        {props.likedStatus ?
          <FontAwesomeIcon icon={solid('star')}/>
          :<FontAwesomeIcon icon={regular('star')}/>
      }
      </button>
        </StyledLikeButton>
    </StyledLikedWrapper>
  )
};

export default Liked;


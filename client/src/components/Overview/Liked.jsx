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
  font-size: 1.2rem;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: white;
  color: #329FA9;
  font-weight: bold;
  border:solid;
  border-color:#A7D4D9;
  border-width: thin;
  height:28px;
`;

const Liked = (props) => {
  // All this does is toggle between solid and regular.
  return(
    <StyledLikedWrapper>
      <StyledLikeButton
        onClick = {props.handleClick}
      >
        {props.likedStatus ?
          <FontAwesomeIcon icon={solid('star')}/>
          :<FontAwesomeIcon icon={regular('star')}/>
      }
        </StyledLikeButton>
    </StyledLikedWrapper>
  )
};

export default Liked;


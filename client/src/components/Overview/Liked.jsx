import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
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
  const [liked, setLiked] = useState(false);

  return(
    <StyledLikedWrapper>
      <StyledLikeButton>
      <button>
        <FontAwesomeIcon icon={regular('star')}/>
      </button>
        </StyledLikeButton>
    </StyledLikedWrapper>
  )
}

export default Liked;


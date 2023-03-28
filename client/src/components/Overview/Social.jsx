import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const SocialSectionWrapper = styled.section`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: #571147;
`;

const StyledCallToAction = styled.section`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size:small;
`;

const Social = () => {

  return(
    <div>
      <StyledCallToAction>
        Share on Social Media:
      </StyledCallToAction>
      <SocialSectionWrapper>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faPinterest} />
          </a>
      </SocialSectionWrapper>
    </div>
  )
}

export default Social;
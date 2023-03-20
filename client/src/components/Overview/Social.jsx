import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const SocialSectionWrapper = styled.section`
  padding: 15px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Social = () => {

  return(
    <div>
      <h4>Share on Social Media:</h4>
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
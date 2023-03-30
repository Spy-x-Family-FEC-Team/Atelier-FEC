import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const SocialSectionWrapper = styled.section`
  display: grid;
  font-size:x-large;
  display: flex;
  justify-content: space-around;
  margin-top:3px;
`;

const IconWrapper = styled.section`
  display:inline-block;
  width:35px;
  height:35px;
  background:white;
  border-radius:50%;
  display: flex;
  justify-content: space-around;
`;


const Social = () => {

  return(
    <div>
      <SocialSectionWrapper>
      <IconWrapper>
          <a
            className="Jlink"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a
            className="Jlink"
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a
            className="Jlink"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a
            className="Jlink"
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </IconWrapper>
      </SocialSectionWrapper>
    </div>
  )
}

export default Social;
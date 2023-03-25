import React, {useState} from 'react';
import styled from 'styled-components';
import OverlayWindow from '/client/src/components/assets/OverlayWindow.jsx';
import Magnified from './Magnified.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const StyledExpandedWrapper = styled.section`
  position: relative;
`;

const StyledCloseButton = styled.section`
  position:absolute;
  top:3px;
  right:3px;
`;

const StyledMainImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
  width:100%
  position:absolute;
`;

const StyledExpandedImage = styled.img`
  max-height: 90vh;
  max-width: 100%;
`;

const StyledIconsGridWrapper = styled.section`
  width: 100%;
  height:50px;
  position:absolute;
  bottom: 1%;
  align-item:center;
`;

const StyledIconsGrid = styled.section`
  width: 90%;
  height:50px;
  position:absolute;
  left:5%;
  display: flex;
  justify-content: space-between;
`;

const OneStyledIconWrapper = styled.section`
  display:inline-block;
  margin:12px;
  font-size:x-large;
`;

const StyledLeftButton = styled.section`
  position:absolute;
  left:5%;
  top:40%;
  font-size:x-large;
`;

const StyledRightButton = styled.section`
  position:absolute;
  right:5%;
  top:40%;
  font-size:x-large;
`;

const Expanded = (props) => {
  const [magnifiedView, setMagnifiedView] = useState(false);

  const toggleMagnified = () => {
    setMagnifiedView(!magnifiedView);
  }

  return(
    <div>
      <StyledExpandedWrapper>
        <StyledCloseButton>
          <button
            onClick={props.toggleExpanded}
          >
            X
          </button>
        </StyledCloseButton>
        <StyledMainImageWrapper>
          <StyledExpandedImage
            src={props.currentImage}
            onClick={toggleMagnified}
          />
          {props.indexOfThisProdView > 0 ?
              <StyledLeftButton
              onClick={() => {
                props.handleViewSelection(props.indexOfThisProdView -1);
                }}
            >
              <FontAwesomeIcon icon={solid('chevron-left')} />
            </StyledLeftButton>
          :null}
          {props.indexOfThisProdView < props.prodViewThumbnails.length - 1 ?
            <StyledRightButton
              onClick={() => {
                props.handleViewSelection(props.indexOfThisProdView +1);
                }}
            >
              <FontAwesomeIcon icon={solid('chevron-right')} />
            </StyledRightButton>
          :null}
        </StyledMainImageWrapper>
        <StyledIconsGridWrapper>
          <StyledIconsGrid>
            {props.prodViewThumbnails.map((url, index) => {
                return (
                  <OneStyledIconWrapper
                    key={index}
                    onClick={() => {
                      props.handleViewSelection(index);
                      }}
                  >
                    {props.indexOfThisProdView === index ?
                      <FontAwesomeIcon icon={solid('square')} />
                      :<FontAwesomeIcon icon={regular('square')} />
                    }
                  </OneStyledIconWrapper>
                )
              })
            }
          </StyledIconsGrid>
        </StyledIconsGridWrapper>
      </StyledExpandedWrapper>

      {magnifiedView ?
        <OverlayWindow
          onBgClick={toggleMagnified}
        >
          <div>testing</div>
          {/* <Magnified
            toggleMagnified={toggleMagnified}
            currentImage={props.currentImage}
          /> */}
        </OverlayWindow>
      :null}
    </div>
  );
};

export default Expanded;
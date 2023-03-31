import React, {useState} from 'react';
import styled, {css} from 'styled-components';
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
  cursor:pointer;
`;

const StyledMainImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height:82vh;
  width:80vw;
  // position:absolute;
  cursor:cell;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${(props) => (css`
    background-image:url("${props.currentImage}");
  `)}
`;
// height:82vh;
// width:80vw; both from 100%

const StyledExpandedImage = styled.img`
  max-height: 82vh;
  max-width: 80vw;
  border-radius: 7px;
`;

const StyledIconsGridWrapper = styled.section`
  width: 100%;
  height:50px;
  position:absolute;
  bottom: 1%;
  align-item:center;
  background: rgba(255, 255, 255, .5);
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
  cursor:pointer;
`;

const StyledLeftButton = styled.section`
  position:absolute;
  left:5%;
  top:40%;
  font-size:x-large;
  width: 40px;
  height: 40px;
  align-items: center;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, .5);
  border-radius:50%;
  cursor:pointer;
`;

const StyledRightButton = styled.section`
  position:absolute;
  right:5%;
  top:40%;
  font-size:x-large;
  width: 40px;
  height: 40px;
  align-items: center;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, .5);
  border-radius:50%;
  cursor:pointer;
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
        <StyledMainImageWrapper
          currentImage={props.currentImage}
          onClick={toggleMagnified}
          onMouseMove={(event) => {
            // console.log("mouse position: x/y => ", event.clientX, event.clientY);
            // console.log("event.target.getBoundingClientRect() :  ", event.target.getBoundingClientRect())
            var clientRect = event.target.getBoundingClientRect();
            console.log("mouse position: x/y => ", ((event.clientX - clientRect.left)/clientRect.width) *100, ((event.clientY - clientRect.top)/clientRect.height) * 100);
          }}

        >
          {!magnifiedView ?
              <>
              {props.indexOfThisProdView > 0 ?
                  <StyledLeftButton
                  onClick={(event) => {
                    props.handleViewSelection(props.indexOfThisProdView -1);
                    event.stopPropagation();
                    }}
                >
                  &nbsp;&nbsp;<FontAwesomeIcon icon={solid('chevron-left')} />
                </StyledLeftButton>
              :null}
              {props.indexOfThisProdView < props.prodViewThumbnails.length - 1 ?
                <StyledRightButton
                  onClick={(event) => {
                    props.handleViewSelection(props.indexOfThisProdView +1);
                    event.stopPropagation();
                    }}
                >
                  &nbsp;&nbsp;<FontAwesomeIcon icon={solid('chevron-right')} />
                </StyledRightButton>
              :null}
              </>
          :null}
        </StyledMainImageWrapper>
        {!magnifiedView ?
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
        :null}
      </StyledExpandedWrapper>

      {/* {magnifiedView ?
        <OverlayWindow
          onBgClick={toggleMagnified}
        >
          <Magnified
            toggleMagnified={toggleMagnified}
            currentImage={props.currentImage}
          />
        </OverlayWindow>
      :null} */}
    </div>
  );
};

export default Expanded;
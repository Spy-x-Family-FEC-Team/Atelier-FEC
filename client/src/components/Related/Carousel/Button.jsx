import React from "React";
import styled from "styled-components";

const StyledLeftBtn = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: ${props => props.disp ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: .8;
  border-radius: 50%;
`;

const StyledRightBtn = styled(StyledLeftBtn)`
  right: 0;
`

export { StyledLeftBtn, StyledRightBtn };
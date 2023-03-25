import React from "React";
import styled from "styled-components";

const StyledLeftBtn = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: ${props => props.display ? "flex" : "none"};
  align-items: center;
`;

const StyledRightBtn = styled(StyledLeftBtn)`
  right: 0;
  justify-content: end;
`

export { StyledLeftBtn, StyledRightBtn };
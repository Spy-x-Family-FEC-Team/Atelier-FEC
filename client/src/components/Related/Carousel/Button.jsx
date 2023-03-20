import React from "React";
import styled from "styled-components";

const Button = () => (

  <div>
    I am a product card
  </div>

);

const StyledBtn = styled.button`
  background-color: blue;
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const StyledRightBtn = styled(StyledBtn)`
  right: 0;
`

export { StyledBtn, StyledRightBtn };
import React from "react";
import styled from "styled-components";
import {Colors} from "/client/src/components/assets/GlobalStyles.js"

const ActionBtn = styled.div`
  height: 38px;
  width: 38px;
  padding: 0;
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: .8;
  box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.8);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 2px 4px 2px rgb(0, 0, 0, 0.6);
  };
  color: ${Colors.verdegris};
`;

export default ActionBtn;
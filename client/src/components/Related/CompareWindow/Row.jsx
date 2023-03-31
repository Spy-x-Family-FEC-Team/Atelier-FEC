import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {Colors} from "/client/src/components/assets/GlobalStyles.js"

const RightTD = styled.td`
  text-align: center;
  color: ${Colors.verdegris};
`;

const Row = ({feature, feat}) => {

  return (
    <tr>
      {feature.a ? (<RightTD><FontAwesomeIcon icon={faCheck}/></RightTD>) : (<td>{null}</td>)}
      <td align="center">{feat}</td>
      {feature.b ? (<RightTD><FontAwesomeIcon icon={faCheck}/></RightTD>) : (<td>{null}</td>)}
    </tr>
  )

}

export default Row;
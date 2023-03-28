import React from "React";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Row = ({feature, feat}) => {

  // console.log(char, 'char', feat, 'feat');
  //console.log('prod1', prod1, 'prod2', prod2);
  console.log(feature, 'feature', feat, 'feat');

  return (
    <tr>
      {feature.a ? (<td><FontAwesomeIcon icon={faCheck}/></td>) : (<td>{null}</td>)}
      <td>{feat}</td>
      {feature.b ? (<td><FontAwesomeIcon icon={faCheck}/></td>) : (<td>{null}</td>)}
    </tr>
  )

}

export default Row;
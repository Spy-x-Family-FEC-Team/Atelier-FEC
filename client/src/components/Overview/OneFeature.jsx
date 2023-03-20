import React from 'react';
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons';

const OneFeature = (props) => {

  return(
    <div>
     <span><FontAwesomeIcon icon={faSolid, faCheck}/>     {props.featureName}: {props.value}</span>
    </div>
  )
}

export default OneFeature;
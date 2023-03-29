import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const OneFeature = (props) => {

  return(
    <div>
     <span>
     <span style={{color:"#91768a"}}><FontAwesomeIcon icon={faCheck}/>&nbsp;</span>
        {props.featureName}: {props.value}
      </span>
    </div>
  )
}

export default OneFeature;
import React from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const OneFeature = (props) => {

  return(
    <div>
     {/* <FontAwesomeIcon icon={solid('check')}/> */}
     <div>{props.featureName}: {props.value}</div>
    </div>
  )
}

export default OneFeature;
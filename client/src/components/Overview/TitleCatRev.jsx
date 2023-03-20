import React from 'react';
// import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";

// const TitleCatRevWrapper = styled.section`

// `;


const TitleCatRev = (props) => {

  return(
    <div>
      <StarRating rawRating={3.7}/>
      <p>{props.category}</p>
      <h2>{props.title}</h2>
    </div>
  )
};

export default TitleCatRev;
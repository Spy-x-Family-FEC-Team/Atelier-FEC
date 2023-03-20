import React from "React";
import styled from "styled-components";

const Card = () => (

  <div>
    I am a product card
  </div>

);

const StyledCard = styled.div`
  background-color: green;
  width: 200px;
  height: 100%;
  grid-column: span 1;
`;

export default StyledCard;
import React from "React";
import styled from "styled-components";

const Card = () => (

  <div>
    I am a product card
  </div>

);

const StyledCard = styled.li`
  background-color: green;
  width: 200px;
  height: 100%;
  position: absolute;
	top: 0;
	left: 0;
`;

export default StyledCard;
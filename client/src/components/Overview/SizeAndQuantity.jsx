import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSizeAndQuantityWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  padding:40px;
`;

const SizeAndQuantity = (props) => {

  return(
    <StyledSizeAndQuantityWrapper>
        <select>
        <option value="none" selected disabled hidden>Select Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <select>
        <option value="none" selected disabled hidden>-</option>
          <option value="1">1</option>
          <option value="2">1</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
    </StyledSizeAndQuantityWrapper>
  )
}

export default SizeAndQuantity;
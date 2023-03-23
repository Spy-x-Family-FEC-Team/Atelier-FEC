import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledSizeAndQuantityWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  padding:40px;
`;

const SizeAndQuantity = (props) => {
    // Variables:
    const [selectedSize, setSelectedSize] = useState(null);
    const [availableSizes, setAvailableSizes] = useState([null]);

  // Helper Functions:
  const getAvailableQuantityOfSize = (size) =>{
    for (const sku in props.skusOfSelectedStyle) {
      if (props.skusOfSelectedStyle[sku].size === size) {
        return props.skusOfSelectedStyle[sku].quantity;
      }
    }
  };

  const atLeastOneThisSize = (size) => {
    var quantity = getAvailableQuantityOfSize(size);
    if (quantity >= 1) {
      return true;
    } else {
      return false;
    }
  };

  const makeAvailableSizesList = function() {
    var sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    var available = [];
    sizes.forEach((size) => {
      if(atLeastOneThisSize(size)) {
        available.push(size);
      }
    });
    setAvailableSizes(available);
  };

  // Update list of size options
  useEffect (() => {
    makeAvailableSizesList();
  },[props.skusOfSelectedStyle]);


  return(
    <StyledSizeAndQuantityWrapper>
        <select
        onChange={(event) => {
          setSelectedSize(event.target.value);
        }}>
        <option value="none" hidden>
          {availableSizes[0] ?
            "Select Size"
            :"OUT OF STOCK"
          }
        </option>
        {availableSizes.map((size) => {
          return(
            <option
              value={size}
              key={size}
            >
                {size}
            </option>
          )
        })}
        </select>
        <select>
        <option value="none" hidden>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
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
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddToBag from './AddToBag.jsx';
import Liked from './Liked.jsx';

const StyledSizeAndQuantityWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  padding:40px;
`;

const PurchaseOrLike = (props) => {
    // Variables:
    const [selectedSize, setSelectedSize] = useState(null);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [quantAvailForSize, setQuantAvailForSize] = useState(null);

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


  // Update list of size options and quantity avail for size
  useEffect (() => {
    makeAvailableSizesList();
    if (selectedSize) {
      setQuantAvailForSize(Math.min(getAvailableQuantityOfSize(selectedSize), 15))
    }
  },[props.skusOfSelectedStyle, selectedSize]);


  return(
    <div>
      <StyledSizeAndQuantityWrapper>
          <select
          onChange={(event) => {
            setSelectedSize(event.target.value);
          }}>
          <option value="none" hidden>Select Size</option>
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
          {selectedSize ?
              new Array(quantAvailForSize).fill(0).map((item, index) => {
                return(
                  <option key={index +1} value={index + 1}>{index +1}</option>
                )
              })
              : <option value="none">-</option>
          }
          </select>
      </StyledSizeAndQuantityWrapper>
      <AddToBag/>
      <Liked />
    </div>
  )
}

export default PurchaseOrLike;
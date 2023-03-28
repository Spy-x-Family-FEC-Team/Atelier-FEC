import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddToBag from './AddToBag.jsx';
import Liked from './Liked.jsx';
import OverlayWindow from '/client/src/components/assets/OverlayWindow.jsx';

const StyledPurchaseOrLikeWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 40px;
`;

const PurchaseOrLike = (props) => {
    // Variables:
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [quantAvailForSize, setQuantAvailForSize] = useState(null);
    const [likedStatus, setLikedStatus] = useState(false);
    const [selectSizeWarning, setSelectSizeWarning] = useState(false);

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

  const findSkuForCurrentStyleThisSize = () => {
    for (const sku in props.skusOfSelectedStyle) {
      if (props.skusOfSelectedStyle[sku].size === selectedSize) {
        return sku;
      }
  }
  };

  const handleBagClick = () => {
    if (!selectedSize) {
      setSelectSizeWarning(true);
    } else {
      axios.post('/api/cart', {
        product_id: props._id,
        sku_id: findSkuForCurrentStyleThisSize(),
        count: selectedQuantity
    })
      .then(()=> {
        console.log(`Your purchase of sku # ${findSkuForCurrentStyleThisSize()} has been successful.`)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const toggleSelectSizeWarning = () => {
    setSelectSizeWarning(!selectSizeWarning);
  }

  const handleLikeClick = () => {
    setLikedStatus(!likedStatus);
  }

  // Update list of size options and quantity avail for size
  useEffect (() => {
    makeAvailableSizesList();
    if (selectedSize) {
      setQuantAvailForSize(Math.min(getAvailableQuantityOfSize(selectedSize), 15))
    }
  },[props.skusOfSelectedStyle, selectedSize]);


  return(
    <div>
      {selectSizeWarning ?
        <OverlayWindow
          onBgClick={toggleSelectSizeWarning}
        >
        <select
          onChange={(event) => {
            setSelectedSize(event.target.value);
            toggleSelectSizeWarning();
          }}
        >
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
        </OverlayWindow>
      :null}

      <StyledPurchaseOrLikeWrapper>
        <select
          onChange={(event) => {
            setSelectedSize(event.target.value);
          }}
        >
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
        <select
          onChange={(event) => {
            setSelectedQuantity(parseInt(event.target.value));
          }}
        >
          {selectedSize ?
              new Array(quantAvailForSize).fill(0).map((item, index) => {
                return(
                  <option key={index +1} value={index + 1}>{index +1}</option>
                )
              })
              : <option value="none">-</option>
          }
        </select>
        <div>
          { (availableSizes.length >= 1) ?
            <AddToBag
              handleClick = {handleBagClick}
            />
            :null
          }
        </div>
        <Liked
          handleClick = {handleLikeClick}
          likedStatus = {likedStatus}
        />
      </StyledPurchaseOrLikeWrapper>
    </div>
  )
}

export default PurchaseOrLike;
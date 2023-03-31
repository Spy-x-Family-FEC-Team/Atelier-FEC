import React from "react";
import styled from "styled-components";
import localForage from "localforage";
import outfit from '/client/src/components/assets/outfit.jsx'
import {Colors} from "/client/src/components/assets/GlobalStyles.js"

const Wrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

const AddOutfit = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-family: Georgia;
  font-weight: Bold;
  color: ${Colors.brunswick};
  box-shadow: 0 5px 10px 2px rgb(0, 0, 0, 0.6);
  &:hover {
    transform: translateY(5px);
    box-shadow: 0 5px 10px 2px rgb(0, 0, 0, 0.6);
  }
`;

const AddToOutfit = ({item, list, setList, product}) => {

  const addToOutfit = () => {

    const outfits = list.slice();
    const filteredOutfits = outfits.filter( prod => {

      return prod[0].id === product[0].id;
    });
    if (!filteredOutfits.length) {
      outfits.push(product);
      localForage.clear();
      localForage.setItem('outfits', outfits)
        .then( () => {
          setList(outfits);
        })
        .catch( err => { console.log('error adding outfit', err)});
      }
  };

  return (
    <Wrapper>
        <AddOutfit onClick={addToOutfit}>Add To Outfit</AddOutfit>
    </Wrapper>
  )


}

export default AddToOutfit;
import React from "react";
import styled from "styled-components";
import localForage from "localforage";
import outfit from '/client/src/components/assets/outfit.jsx'

const AddOutfit = styled.button`
  background-color: grey;
  width: 50px;
  height: 50px;
  position: absolute;
  transform: translateY(-50%);
  transform: translateX(50%);
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
    <>
      <AddOutfit onClick={addToOutfit}>Add to Outfit</AddOutfit>
    </>
  )

}

export default AddToOutfit;
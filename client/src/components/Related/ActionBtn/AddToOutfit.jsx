import React from "React";
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

const AddToOutfit = ({item, list, setList}) => {

  const addToOutfit = (item, list) => {

    const outfits = list.slice();
    outfits.push(outfit);
    localForage.clear();
    localForage.setItem('outfits', outfits)
      .then( () => {
        setList(outfits);
      })
      .catch( err => { console.log('error adding outfit', err)});
  };

  const rmvFromOutfit = (item) => {
    const outfits = list.slice();
    outfits.forEach( (prod, index) => {
      if (prod[0].id === item[0].id) {
        outfits.splice(index, 1);
      }
    });
    localForage.clear();
    localForage.setItem('outfits', outfits)
      .then( () => {
        setList(outfits);
      })
      .catch( err => { console.log('error removing from outfit', err)});
  };

  return (
    <>
      <AddOutfit onClick={() => {addToOutfit(item, list)}}>Add to Outfit</AddOutfit>
    </>
  )

}

export default AddToOutfit;
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

const AddToOutfit = ({item, list, setList, product}) => {

  const addToOutfit = () => {

    console.log('item in addbutton', item, 'list', list, 'product', product);

    const outfits = list.slice();
    console.log('outfits in addtoOutfit', outfits);
    const filteredOutfits = outfits.filter( prod => {
      console.log('prod', prod, 'prodID', prod[0].id, 'product', product, 'product.id', product[0].id)
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
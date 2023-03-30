import React from "react";
import styled from "styled-components";
import ActionBtn from "./ActionBtn.jsx";
import localForage from "localforage";
import outfit from '/client/src/components/assets/outfit.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const RmvFromOutfit = ({item, list, setList}) => {

  const rmvFromOutfit = () => {
    const outfits = list.slice();
    const filteredOutfits = outfits.filter( prod => {
      return prod[0].id !== item[0].id;
    });
    localForage.clear();
    localForage.setItem('outfits', filteredOutfits)
      .then( () => {
        setList(filteredOutfits);
      })
      .catch( err => { console.log('error removing from outfit', err)});
  };

  return (
    <>
      <ActionBtn onClick={rmvFromOutfit}>
        <FontAwesomeIcon icon={solid("circle-xmark")} />
      </ActionBtn>
    </>
  )

}

export default RmvFromOutfit;
import React from "React";
import styled from "styled-components";
import ActionBtn from "./ActionBtn.jsx";
import localForage from "localforage";
import outfit from '/client/src/components/assets/outfit.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const RmvFromOutfit = ({item, list, setList}) => {

  const rmvFromOutfit = () => {
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
      <ActionBtn onClick={rmvFromOutfit}>
        <FontAwesomeIcon icon={solid("circle-xmark")} />
      </ActionBtn>
    </>
  )

}

export default RmvFromOutfit;
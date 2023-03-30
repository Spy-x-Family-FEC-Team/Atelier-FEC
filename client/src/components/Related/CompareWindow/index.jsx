import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import OverlayWindow from "/client/src/components/assets/OverlayWindow.jsx";
import ActionBtn from "../ActionBtn/ActionBtn.jsx";
import Table from "./table.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const CompareItems = ({item, product}) => {

  const [modal, setModal] = useState(false);
	const toggleModal = () => {setModal((value) => (!value))}

    return (
    <>
      <ActionBtn onClick={toggleModal}>
        <FontAwesomeIcon icon={regular("star")} />
      </ActionBtn>
      {modal ?
        <OverlayWindow onBgClick={toggleModal}>
          <h5>Comparing</h5>
          <Table item={item} product={product}></Table>
        </OverlayWindow> : null}
    </>
  )

}

export default CompareItems;
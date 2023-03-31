import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import product from "/server/exampleData/product.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Row from './Row.jsx';

const CompareTable = styled.table`
`

const Table = ({item, product}) => {

  const product1 = product[0].features;
  const product2 = item[0].features;

  let combFeats = {};

  if(product1.length) {
    product1.forEach( feat => {
    combFeats[feat.feature] = {a: feat.value, b: false};
    });
  }

  if(product2.length) {
    product2.forEach( feat => {
      if (!combFeats[feat.feature]) {
        combFeats[feat.feature] = {a: false, b: feat.value}
      } else {
        combFeats[feat.feature].b = feat.value;
      }
    });
  }


  const compareFeatures = Object.keys(combFeats);

  return (
    <>
      <CompareTable>
        <tbody>
          <tr>
            <th>{product[0].name}</th>
            <th></th>
            <th>{item[0].name}</th>
          </tr>
          {
            compareFeatures.map( feat => {
              return (
                <Row feature={combFeats[feat]} feat={feat}/>
            )})
          }
        </tbody>
      </CompareTable>
    </>
  )

}

export default Table;
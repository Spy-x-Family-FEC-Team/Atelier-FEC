import React from "React";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import product from "/server/exampleData/product.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Row from './Row.jsx';

const CompareTable = styled.table`
`

const Table = ({item, product}) => {

  const product1 = item[0].features;
  const product2 = product[0].features;

  let combFeats = {};

  product1.forEach( feat => {
    combFeats[feat.feature] = {a: feat.value, b: false};
  });

  product2.forEach( feat => {
    if (!combFeats[feat.feature]) {
      combFeats[feat.feature] = {a: false, b: feat.value}
    } else {
      combFeats[feat.feature].b = feat.value;
    }
  });

  const compareFeatures = Object.keys(combFeats);
  console.log(combFeats, 'combFeats', compareFeatures, 'compareFeatures');

  return (
    <>
      <CompareTable>
        <tbody>
          <tr>
            <th>Product Short Name</th>
            <th></th>
            <th>Product Short Name</th>
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
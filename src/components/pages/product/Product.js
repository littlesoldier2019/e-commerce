import React from 'react';
import '../../../assets/styles/Product.scss';
import Header from '../../shared-components/Header';
import ProductInfo from './ProductInfo';
import CompleteLook from './CompleteLook';
import AlsoLike from './AlsoLike';

function Product() {
  return (
    <>
      <Header bkgcolor='#3A2511'/>
      <ProductInfo />
      <CompleteLook />
      <AlsoLike />
    </>
  );
}

export default Product;

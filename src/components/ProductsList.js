import React from "react"
import styled from "styled-components"

import ProductCard from './ProductCard'
import roswell from "../images/roswell.png"
import minimal from "../images/minimal.png"
import lounge from "../images/lounge.png"
import velvet from "../images/velvet.png"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  justify-content: space-between;
  margin: 20px 0 0 0;
  z-index: 2;
  align-self: center;
`;

const ProductList = () => {
  return (
    <Container>
      <ProductCard 
        bgColor="#E0E6E2"
        title="Roswell"
        price="$50"
        priceColor="#9AC29A"
        imgPath={roswell}
      />
      <ProductCard 
        bgColor="#E5E5E5"
        title="Minimal"
        price="$42"
        priceColor="#989999"
        imgPath={minimal}
      />
      <ProductCard 
        bgColor="#D9DCF5"
        title="Lounge"
        price="$35"
        priceColor="#7B86AD"
        imgPath={lounge}
      />
      <ProductCard 
        bgColor="#EAE6E5"
        title="Velvet"
        price="$53"
        priceColor="#D2A9A7"
        imgPath={velvet}
        />
    </Container>
  )
}
  
  export default ProductList
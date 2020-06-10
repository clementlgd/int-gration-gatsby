import React, { Component } from "react"
import styled from "styled-components"

import loungeBig from "../images/lounge-big.png"

import AddToCartButton from './AddToCartButton'
import ProductCounter from './ProductCounter'
import ProductColorSelector from './ProductColorSelector'
// import BackButton from './BackButton'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #D9DCF5;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 700px) {
    flex-direction: row;
  }
`;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
	padding: 25px 25px 0 25px;
	@media (min-width: 700px) {
		padding: ${props => props.padding || "25px 25px 0 25px" };
  }
`;

const ImageContainer = styled.div`
  flex: 2;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
	margin-top: 50px;
	@media (min-width: 700px) {
  	width: 350px;
  }
`;

const InfoContainer = styled.div`
	position: relative;
	background-color: #fff;
  flex: 1.5;
  height: 300px;
	width: 100%;
  border-radius: 35px 35px 0 0;
	@media (min-width: 700px) {
  	margin-right: 50px;
		height: 450px;
		border-radius: 35px;
  }
`;

const ProductTitle = styled.p`
  font-size: 22px;
	color: #4d4d4d;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
	margin: 0;
`;

const Category = styled.p`
	font-size: 14px;
	padding-left: 25px;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	color: #9F9F9F;
`;

const Price = styled.p`
  font-size: 22px;
	color: #8F99B3;
  font-weight: 600;
  margin: 0 0 0 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 15px;
	color: #4d4d4d;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
	padding: 15px 25px 0 25px;
  color: #6C6B6B;
	line-height: 24px;
	margin: 0;
`;

class ProductDetail extends Component {
	state = {}

	AddToCart = () => {
		console.log("%cProduit ajouté au panier!", "color: green; font-weight: bold;"); 
	}

	render() {
		return (
			<Container>
				{/* <BackButton path="/" /> */}
				<ImageContainer>
					<ProductImage src={loungeBig} />
				</ImageContainer>
				<InfoContainer>
					<HorizontalContainer>
						<ProductTitle>Lounge Chair</ProductTitle>
						<Price>$35</Price>
					</HorizontalContainer>
					<Category>Chairs</Category>
					<Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Description>		
					<HorizontalContainer padding="75px 25px 0 25px">
						<ProductColorSelector />
						<ProductCounter />
					</HorizontalContainer>
					<AddToCartButton 
						text="Add to cart"
						onClick={this.AddToCart()}
						link="#"
					/>
				</InfoContainer>
			</Container>
		)
	}
}
  
export default ProductDetail
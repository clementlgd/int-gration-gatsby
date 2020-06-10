import React from "react"
import styled from "styled-components"

import cartIcon from '../images/shopping-bag.svg'

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
	background: #E8EBFC;
  position: absolute;
	bottom: 0;
  border-radius: 15px 15px 0 0;
  text-decoration: none;
  height: 65px;
  &:hover {
    background: #d2d8f9;
    transition: 0.4s;
  }
  @media (min-width: 700px) {
		border-radius: 15px 15px 35px 35px;
  }
`;

const Text = styled.p`
	font-family: 'Rubik', sans-serif;
	color: #7889D0;
	font-weight: 600;
	font-size: 16px;
`;

const CartIcon = styled.img`
  width: 20px;
  opacity: 0.7;
  margin-right: 5px;
  z-index: 10;
`;

const AddToCartButton = ({ text, link }) => (
	<Button href={link}>
		<CartIcon src={cartIcon}/>
		<Text>{text}</Text>
	</Button>
)

export default AddToCartButton
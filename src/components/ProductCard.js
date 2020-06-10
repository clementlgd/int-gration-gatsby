import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Container = styled.div`
  height: 230px;
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.bgColor || "palevioletred"};
  border-radius: 14px;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    height: 300px;
    width: 400px;
    margin-right: 20px;
  }
`;

const Title = styled.p`
  font-size: 14px;
	color: #4d4d4d;
  font-weight: bold;
  margin: 0 0 3px 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 18px;
	color: ${props => props.priceColor || "palevioletred"};
  font-weight: 600;
  margin: 0 0 0 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

const ImageContainer = styled.div`
  flex: 2;
  margin-top: 35px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  @media (min-width: 700px) {
    width: 120px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProductCard = ({ bgColor, title, price, priceColor, imgPath }) => {
  return (
    <AniLink style={{textDecoration: "none"}} swipe direction="left" top="entry" duration={0.6} to="singleProduct">
      <Container bgColor={bgColor}>
        <ImageContainer>
          <Image src={imgPath} alt="product" />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Price priceColor={priceColor}>{price}</Price>
        </InfoContainer>
      </Container>
    </AniLink>
  )
}
  
export default ProductCard
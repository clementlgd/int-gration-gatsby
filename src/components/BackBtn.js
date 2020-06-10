import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import backArrow from "../images/arrow-left.svg"

const BackButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	background-color: #fff;
	border-radius: 25px;
	position: absolute;
	top: 40px;
  left: 30px;
  transition: 0.4s;
	&:hover {
    background: #DADDF5;
    transition: 0.4s;
  }
`;

const BackArrowImage = styled.img`
  width: 70%;
  opacity: 0.7;
`;

const BackButton = ({ path }) => (
  <AniLink style={{textDecoration: "none"}} swipe direction="right" top="exit" duration={0.6} to={path}>
    <BackButtonContainer>
      <BackArrowImage src={backArrow} alt="Back Arrow"/>
    </BackButtonContainer>
  </AniLink>
)

export default BackButton
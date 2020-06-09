import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
`;

const BackArrowImage = styled.img`
  width: 70%;
  opacity: 0.7;
`;

const BackButton = ({ path }) => (
  <Link to={path}>
    <BackButtonContainer>
      <BackArrowImage src={backArrow}/>
    </BackButtonContainer>
  </Link>
)

export default BackButton
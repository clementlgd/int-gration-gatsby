import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import "../css/main.css"
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductsList'

const Container = styled.div`
	padding: 30px 30px;
	@media (min-width: 700px) {
  	display: flex;
		flex-direction: column;
		align-items: center;
  }
`;

const Title = styled.h1`
	font-size: 25px;
	color: #4d4d4d;
	max-width: 220px;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	@media (min-width: 700px) {
		text-align: center;
		font-size: 40px;
		max-width: 350px;
  }
`;

const IndexPage = () => (
	<Layout>
		<Container>
			<Title>What item are you looking for ?</Title> 
			<Navbar />
			<ProductList />
		</Container>
	</Layout>
)

export default IndexPage

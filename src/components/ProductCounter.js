import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DisplayNumber = styled.p`
  font-size: 22px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  margin: 0 10px;
`;

const DisplayButton = styled.button`
  color: #7B8CD1;
  background-color: #ECEEF8;
  padding: 3px 0;
  width: 32px;
  border: 0;
  border-radius: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 22px;
  outline: none; 
`;

class ProductCounter extends Component {
  state={
    count: 0,
  }

  handleIncrement = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 })
    }
  }

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render(){
    return (
      <Container>
        <DisplayButton onClick={this.handleDecrement}>-</DisplayButton>
        <DisplayNumber>{this.state.count}</DisplayNumber>
        <DisplayButton onClick={this.handleIncrement}>+</DisplayButton>
      </Container>
    )
  }
}

export default ProductCounter
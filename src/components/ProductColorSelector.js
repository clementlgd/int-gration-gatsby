import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0 15px 0 0;
  &:last-child {
    margin: 0;
  }
`;

const ListContent = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${props => props.bgColor || "palevioletred"};
  position: relative;
  z-index: 5;
  &.active {
    border: 4px solid #AEB7D4;
    width: 22px;
    height: 22px;
  }
`;

class ProductColorSelector extends Component {
  state={
    currentColor: 0,
  }

  handleClick = (index) => {
    this.setState({ currentColor: index });
  } 

  render(){
    return (
      <Container>
        <ListContainer>
          <ListItem>
            <ListContent 
              bgColor="#181C22"
              className={this.state.currentColor === 0 ? 'active' : ''}
              onClick={(e) => this.handleClick(0)}
            />
          </ListItem>
          <ListItem>
            <ListContent 
              bgColor="#ED9593"
              className={this.state.currentColor === 1 ? 'active' : ''}
              onClick={(e) => this.handleClick(1)}
            />
          </ListItem>
          <ListItem>
            <ListContent 
              bgColor="#9ED6AA"
              className={this.state.currentColor === 2 ? 'active' : ''}
              onClick={(e) => this.handleClick(2)}
            />
          </ListItem>
        </ListContainer>
      </Container>
    )
  }
}

export default ProductColorSelector
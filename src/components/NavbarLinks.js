import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #d9d9d9;
  display: inline-block;
  white-space: nowrap;
  margin: 0 15px;
  transition: all 200ms ease-in;
  position: relative;
	font-size: 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

	&:first-child{
		margin: 0 15px 0 0;
	}

  :after {
    position: absolute;
    top: 30px;
    left: 50%;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #333333;
    height: 5px;
		border-radius: 20px;
  }

  &.active {
    color: #333333;
    ::after {
      width: 5px;
    }
  }
`

class NavbarLinks extends Component {
  state={
    currentItem: 0,
  }

  handleClick = (index) => {
    this.setState({ currentItem: index });
  } 

  render() {
    return (
      <>
        <NavItem 
        to="/"
        className={this.state.currentItem === 0 ? 'active' : ''}
        onClick={(e) => this.handleClick(0)}
        >
          Chairs
        </NavItem>
        <NavItem 
        to="/"
        className={this.state.currentItem === 1 ? 'active' : ''}
        onClick={(e) => this.handleClick(1)}
        >
          Sofas
        </NavItem>
        <NavItem 
        to="/"
        className={this.state.currentItem === 2 ? 'active' : ''}
        onClick={(e) => this.handleClick(2)}
        >
          Tables
        </NavItem>
        <NavItem 
        to="/"
        className={this.state.currentItem === 3 ? 'active' : ''}
        onClick={(e) => this.handleClick(3)}
        >
          Lamps
        </NavItem>
      </>
    )
  }
}

export default NavbarLinks